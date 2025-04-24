import React from 'react';

const StatusBadge = ({ status }) => {

    const getStatusStyles = () => {
        switch (status) {
            case 'Order Placed':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Order Confirmed':
                return 'bg-indigo-100 text-indigo-800 border-indigo-200';
            case 'Packed':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'Shipped':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'Out for Delivery':
                return 'bg-teal-100 text-teal-800 border-teal-200';
            case 'Delivered':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'Cancelled':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'Returned':
                return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'Refunded':
                return 'bg-pink-100 text-pink-800 border-pink-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusLabel = () => {
        switch (status) {
            case 'Order Placed':
            case 'Order Confirmed':
            case 'Packed':
            case 'Shipped':
            case 'Out for Delivery':
            case 'Delivered':
            case 'Cancelled':
            case 'Returned':
            case 'Refunded':
                return status;
            default:
                return status;
        }
    };

    return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${getStatusStyles()} transition-colors duration-200`}>
            {getStatusLabel()}
        </span>
    );
};

export default StatusBadge;