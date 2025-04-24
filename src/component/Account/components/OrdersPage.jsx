import React, { useState, useMemo, useEffect, Fragment } from 'react';
import { ShoppingBag } from 'lucide-react';
import OrderList from './OrderList';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../Slice/order';
import Cookies from 'js-cookie'


const OrdersPage = () => {
    const { orders, loading } = useSelector((state) => state.order);
    const [statusFilter, setStatusFilter] = useState('all');
    const dispatch = useDispatch();
    const token = Cookies.get('Token')

    useEffect(() => {
        if (token) {
            dispatch(getOrder());
        }
    }, [])

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center">
                        <ShoppingBag className="h-8 w-8 text-[#018D43] mr-3" />
                        <h1 className="text-2xl font-bold text-[#018D43]">Your Orders</h1>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                        View and manage your order history
                    </p>
                </div>

                {/* Filters and Search */}
                {/* <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
                    <div className="relative rounded-md shadow-sm max-w-xs">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            type="text"
                            className="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10"
                            placeholder="Search orders..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <Filter className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm text-gray-700 mr-2">Status:</span>
                            <select
                                className="rounded-md border-gray-300 py-1.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-10"
                                value={statusFilter}
                                onChange={handleStatusFilterChange}
                            >
                                <option value="all">All Orders</option>
                                <option value="processing">Processing</option>
                                <option value="shipped">Shipped</option>
                                <option value="delivered">Delivered</option>
                                <option value="cancelled">Cancelled</option>
                                <option value="returned">Returned</option>
                            </select>
                        </div>
                    </div>
                </div> */}

                {/* Order Stats */}
                {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'All Orders', value: orders.length, color: 'bg-blue-50 text-blue-700' },
                        { label: 'Processing', value: orders.filter(o => o.status === 'processing').length, color: 'bg-yellow-50 text-yellow-700' },
                        { label: 'Delivered', value: orders.filter(o => o.status === 'delivered').length, color: 'bg-green-50 text-green-700' },
                        { label: 'Cancelled', value: orders.filter(o => o.status === 'cancelled').length, color: 'bg-red-50 text-red-700' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className={`${stat.color} rounded-lg p-4 shadow-sm transition-transform duration-200 hover:scale-105`}
                        >
                            <p className="text-sm font-medium mb-1">{stat.label}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                    ))}
                </div> */}

                {/* Order Results */}
                <div>
                    {
                        loading ?
                            <div className="w-full h-[500px] flex items-center justify-center bg-white">
                                <img
                                    src="https://spiruswastha.com/cdn/shop/t/25/assets/t4s_loader.svg?v=145003788389301961301736154755"
                                    alt="Loading..."
                                    className="w-16 h-16"
                                />
                            </div>
                            :
                            <Fragment>
                                <h2 className="text-lg font-medium text-gray-900 mb-4">
                                    {orders?.length === 0
                                        ? 'No orders found'
                                        : statusFilter === 'all'
                                            ? `${orders?.length} orders`
                                            : `${orders?.length} ${statusFilter} orders`}
                                </h2>
                                <OrderList orders={orders} />
                            </Fragment>

                    }
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;