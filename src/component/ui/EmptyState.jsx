import React from 'react';
import { PackageSearch } from 'lucide-react';
import Button from './Button';

const EmptyState = ({
  title = 'No orders found',
  description = 'We couldn\'t find any orders matching your criteria.',
  ctaText = 'Continue Shopping',
  onCtaClick
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-gray-100 p-4 rounded-full mb-4">
        <PackageSearch className="h-8 w-8 text-gray-500" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-6 max-w-md">{description}</p>
      {ctaText && onCtaClick && (
        <Button variant="primary" onClick={onCtaClick}>
          {ctaText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;