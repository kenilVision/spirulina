import React from 'react';
import { formatCurrency } from '../../../utils/formate';

const OrderItem = ({ item }) => {
    console.log(item)
    return (
        <div className="flex py-4 border-b border-gray-200 last:border-0">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                {
                    item?.productName ? <img
                        src={`http://localhost:5050/image/products/${item?.images[0]}`}
                        alt={item?.productName}
                        className="h-full w-full object-cover object-center"
                    />
                        :
                        <img
                            src={`http://localhost:5050/image/productCombo/${item?.image}`}
                            alt={item?.comboName}
                            className="h-full w-full object-cover object-center"
                        />
                }

            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-900 font-bold">{item?.productName || item?.comboName}</h3>
                        {/* <div className="mt-1 flex text-xs text-gray-500">
                            {item.color && <p className="mr-4">Color: {item.color}</p>}
                            {item.size && <p>Size: {item.size}</p>}
                        </div> */}
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                        {formatCurrency(item.originalPrice)}
                    </p>
                </div>
                <div className="flex flex-1 items-end justify-between text-xs">
                    <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                    <p className="text-gray-500 text-sm">
                        Subtotal: {formatCurrency(item.originalPrice * item.quantity)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;