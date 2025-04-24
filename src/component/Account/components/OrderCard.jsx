import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { formatCurrency, formatDate, formatShortDate } from '../../../utils/formate';
import StatusBadge from '../../ui/StatusBadge';
import OrderItem from './OrderItem';
import OrderTimeline from './OrderTimeline';

const OrderCard = ({ order }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md mb-6">
            {/* Order Header */}
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200">
                <div className="mb-2 sm:mb-0">
                    <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">Order #{order.orderId}</h3>
                        <span className="mx-2 text-gray-300">•</span>
                        <p className="text-sm text-gray-500 hidden sm:block">{formatDate(order.createdAt)}</p>
                        <p className="text-sm text-gray-500 sm:hidden">{formatShortDate(order.createdAt)}</p>
                    </div>
                    <div className="flex items-center mt-1">
                        <StatusBadge status={order.deliveryStatus} />
                        {order.trackingNumber && (
                            <span className="ml-2 text-xs text-gray-500">
                                Tracking: {order.trackingNumber}
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center">
                    <p className="text-lg font-semibold text-gray-900 mr-4">
                        {formatCurrency(order.totalAmount)}
                    </p>
                    <button
                        onClick={toggleExpanded}
                        className="flex items-center text-sm font-medium text-[#018D43] hover:text-[#018D43] transition-colors mt-2 sm:mt-0"
                    >
                        {expanded ? (
                            <>
                                <span>Hide Details</span>
                                <ChevronUp className="ml-1 h-4 w-4" />
                            </>
                        ) : (
                            <>
                                <span>View Details</span>
                                <ChevronDown className="ml-1 h-4 w-4" />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Order Details (Expandable) */}
            {expanded && (
                <div className="p-4 sm:p-6 animate-fadeIn">
                    {/* Order Timeline */}
                    <div className="mb-6">
                        <OrderTimeline steps={order?.statusTimeline} />
                    </div>

                    {/* Order Items */}
                    <div className="mb-6">
                        <h4 className="text-md font-semibold text-gray-900 mb-3">Order Items</h4>
                        <div className="divide-y divide-gray-200">
                            {order.items.map((item) => (
                                <OrderItem key={item._id} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* Order Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <h4 className="text-md font-semibold text-gray-900 mb-2">Shipping Address</h4>
                            <div className="text-sm text-gray-500">
                                <p>{order.customerName}</p>
                                <p>{`${order.address},${order.address2}`}</p>
                                <p>
                                    {order?.city}, {order?.state}{' '}
                                    {order?.zip}
                                </p>
                                <p>{order?.country}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    {/* <div className="flex flex-wrap gap-3">
                        <Button
                            variant="primary"
                            icon={<RefreshCw className="h-4 w-4" />}
                            onClick={handleReorder}
                        >
                            Reorder
                        </Button>
                        <Button
                            variant="outline"
                            icon={<Download className="h-4 w-4" />}
                            onClick={handleDownloadInvoice}
                        >
                            Download Invoice
                        </Button>
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default OrderCard;