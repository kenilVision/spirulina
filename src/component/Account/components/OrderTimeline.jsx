// import React, { useMemo } from 'react';
// import { formatDate } from '../../../utils/formate';
// import { CheckCircle, Clock, Package, Truck, ShoppingBag, AlertCircle, RefreshCw } from 'lucide-react';

// const OrderTimeline = ({ order }) => {
//     const getStatusIcon = (status) => {
//         switch (status) {
//             case 'processing':
//                 return <Clock className="h-5 w-5" />;
//             case 'shipped':
//                 return <Truck className="h-5 w-5" />;
//             case 'delivered':
//                 return <Package className="h-5 w-5" />;
//             case 'cancelled':
//                 return <AlertCircle className="h-5 w-5" />;
//             case 'returned':
//                 return <RefreshCw className="h-5 w-5" />;
//             default:
//                 return <ShoppingBag className="h-5 w-5" />;
//         }
//     };

//     const timelineSteps = useMemo(() => {
//         // Define all possible steps in order
//         const allSteps = [
//             {
//                 status: 'processing',
//                 label: 'Processing',
//                 description: 'Your order has been received and is being processed',
//                 date: formatDate(order.date),
//                 completed: ['processing', 'shipped', 'delivered'].includes(order.status),
//                 current: order.status === 'processing'
//             },
//             {
//                 status: 'shipped',
//                 label: 'Shipped',
//                 description: 'Your order has been shipped',
//                 date: order.status === 'shipped' || order.status === 'delivered'
//                     ? formatDate(new Date(new Date(order.date).getTime() + 86400000).toISOString())
//                     : undefined,
//                 completed: ['shipped', 'delivered'].includes(order.status),
//                 current: order.status === 'shipped'
//             },
//             {
//                 status: 'delivered',
//                 label: 'Delivered',
//                 description: 'Your order has been delivered',
//                 date: order.status === 'delivered'
//                     ? formatDate(new Date(new Date(order.date).getTime() + 86400000 * 3).toISOString())
//                     : undefined,
//                 completed: order.status === 'delivered',
//                 current: order.status === 'delivered'
//             }
//         ];

//         // For cancelled orders, show only processing and cancelled
//         if (order.status === 'cancelled') {
//             return [
//                 allSteps[0],
//                 {
//                     status: 'cancelled',
//                     label: 'Cancelled',
//                     description: 'Your order has been cancelled',
//                     date: formatDate(new Date(new Date(order.date).getTime() + 86400000).toISOString()),
//                     completed: true,
//                     current: true
//                 }
//             ];
//         }

//         // For returned orders, show full timeline plus returned
//         if (order.status === 'returned') {
//             return [
//                 ...allSteps.map(step => ({
//                     ...step,
//                     current: false,
//                     completed: true
//                 })),
//                 {
//                     status: 'returned',
//                     label: 'Returned',
//                     description: 'Your order has been returned',
//                     date: formatDate(new Date(new Date(order.date).getTime() + 86400000 * 7).toISOString()),
//                     completed: true,
//                     current: true
//                 }
//             ];
//         }

//         return allSteps;
//     }, [order]);

//     return (
//         <div className="py-2">
//             <h4 className="text-sm font-medium text-gray-900 mb-3">Order Status</h4>
//             <div className="relative">
//                 {/* Timeline line */}
//                 <div
//                     className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"
//                     aria-hidden="true"
//                 />

//                 {/* Timeline steps */}
//                 <div className="flow-root">
//                     <ul role="list" className="-mb-8">
//                         {timelineSteps.map((step, stepIdx) => (
//                             <li key={step.status} className="relative pb-8">
//                                 {stepIdx !== timelineSteps.length - 1 ? (
//                                     <span
//                                         className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
//                                         aria-hidden="true"
//                                     />
//                                 ) : null}
//                                 <div className="relative flex items-start space-x-3">
//                                     <div>
//                                         <div className={`relative flex h-8 w-8 items-center justify-center rounded-full ${step.completed
//                                             ? 'bg-blue-100 text-blue-600'
//                                             : step.current
//                                                 ? 'bg-blue-50 text-blue-500 border border-blue-500'
//                                                 : 'bg-gray-100 text-gray-400'
//                                             } transition-colors duration-300`}>
//                                             {step.completed ? (
//                                                 <CheckCircle className="h-5 w-5" />
//                                             ) : (
//                                                 getStatusIcon(step.status)
//                                             )}
//                                         </div>
//                                     </div>
//                                     <div className="min-w-0 flex-1 py-0.5">
//                                         <div className="flex items-center space-x-2">
//                                             <span className={`text-sm font-medium ${step.current ? 'text-gray-900' : 'text-gray-700'
//                                                 }`}>
//                                                 {step.label}
//                                             </span>
//                                             {step.date && (
//                                                 <span className="text-xs text-gray-500">{step.date}</span>
//                                             )}
//                                         </div>
//                                         <p className="text-xs text-gray-500">{step.description}</p>
//                                     </div>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OrderTimeline;

import {
    ShoppingBag,
    Truck,
    Package,
    Clock,
    AlertCircle,
    RefreshCw,
    DollarSign,
    CheckCircle,
} from 'lucide-react';
import { formatDateTime } from '../../../utils/formate';
import { useMemo } from 'react';

const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
        case 'order placed':
        case 'order confirmed':
        case 'packed':
            return <ShoppingBag className="h-5 w-5" />;
        case 'shipped':
            return <Truck className="h-5 w-5" />;
        case 'out for delivery':
            return <Clock className="h-5 w-5" />;
        case 'delivered':
            return <Package className="h-5 w-5" />;
        case 'cancelled':
            return <AlertCircle className="h-5 w-5" />;
        case 'returned':
            return <RefreshCw className="h-5 w-5" />;
        case 'refunded':
            return <DollarSign className="h-5 w-5" />;
        default:
            return <ShoppingBag className="h-5 w-5" />;
    }
};

const getCompletedDescription = (title) => {
    switch (title.toLowerCase()) {
        case 'order placed':
            return 'Your order has been placed and is being processed.';
        case 'order confirmed':
            return 'Your order has been confirmed and is now being prepared.';
        case 'packed':
            return 'Your order has been packed and is ready for shipping.';
        case 'shipped':
            return 'Your order has been shipped and is on its way to you.';
        case 'out for delivery':
            return 'Your order is out for delivery and will arrive soon.';
        case 'delivered':
            return 'Your order has been delivered successfully.';
        case 'cancelled':
            return 'Your order has been cancelled and will not be processed.';
        case 'returned':
            return 'Your order has been returned and is being processed.';
        case 'refunded':
            return 'Your order has been refunded successfully.';
        default:
            return 'Status not available.';
    }
};

const getPendingDescription = (title) => {
    switch (title.toLowerCase()) {
        case 'order placed':
            return 'Your order has been placed and is awaiting confirmation.';
        case 'order confirmed':
            return 'Your order is confirmed and will be prepared shortly.';
        case 'packed':
            return 'Your order is being packed and will be shipped soon.';
        case 'shipped':
            return 'Your order is on its way to you.';
        case 'out for delivery':
            return 'Your order is out for delivery.';
        case 'delivered':
            return 'Your order will be delivered soon.';
        case 'cancelled':
            return 'Your order is pending cancellation.';
        case 'returned':
            return 'Your return request is being processed.';
        case 'refunded':
            return 'Your refund is being processed.';
        default:
            return 'Status is being updated.';
    }
};

const OrderTimeline = ({ steps = [] }) => {
    const timelineSteps = useMemo(() => {
        return steps.map((step) => ({
            status: step.title.toLowerCase(),
            label: step.title,
            description:
                step.status === 'completed'
                    ? getCompletedDescription(step.title)
                    : getPendingDescription(step.title),
            date: step.timeLogged ? formatDateTime(step.timeLogged) : '',
            completed: step.status === 'completed',
            current: step.status === 'pending',
        }));
    }, [steps]);

    return (
        <div className='px-4 py-2'>
            <h4 className="text-md font-semibold text-gray-900 mb-3">Order Status</h4>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {timelineSteps.map((step, idx) => (
                    <li className="mb-6 ms-6" key={step.status}>
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -start-4 ring-8 ring-white">
                            <div
                                className={`relative flex h-8 w-8 items-center justify-center rounded-full ${step?.completed
                                    ? 'bg-[#D6F5E3] text-[#018D43]'
                                    : step.current
                                        ? 'bg-[#E6F4EC] text-[#018D43] border border-[#018D43]'
                                        : 'bg-gray-100 text-gray-400'
                                    }`}
                            >
                                {step?.completed ? (
                                    <CheckCircle className="h-5 w-5" />
                                ) : (
                                    getStatusIcon(step?.status)
                                )}
                            </div>
                        </span>
                        <h3 className="flex items-center mb-1 text-sm font-semibold text-gray-90 ms-1">
                            {step.label}
                            {step.current && (
                                <span className="bg-[#E6F4EC] text-[#018D43] text-xs font-medium px-2.5 py-0.5 rounded ms-3">
                                    In progress
                                </span>
                            )}
                        </h3>
                        <time className="block mb-2 text-xs font-normal leading-none text-gray-400">
                            {step.date}
                        </time>
                        <p className="mb-4 text-sm font-normal text-gray-500">
                            {step.description}
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default OrderTimeline;
