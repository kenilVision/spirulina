import React from 'react';
import OrderCard from './OrderCard';
import EmptyState from '../../ui/EmptyState';
import { useNavigate } from 'react-router-dom';

const OrderList = ({ orders, isLoading = false }) => {
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <div className="space-y-6">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="animate-pulse">
                        <div className="h-32 bg-gray-200 rounded-lg mb-2"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (orders?.length === 0) {
        return (
            <EmptyState
                title="No orders yet"
                description="When you place orders, they will appear here."
                ctaText="Start Shopping"
                onCtaClick={() => navigate('/')}
            />
        );
    }

    return (
        <div className="space-y-4">
            {orders?.map((order) => (
                <OrderCard key={order?._id} order={order} />
            ))}
        </div>
    );
};

export default OrderList;