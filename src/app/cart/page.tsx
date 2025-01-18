"use client";
import React from "react";
import { remove } from "../redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store"; // Replace with the actual path to your store's RootState type
import Image from "next/image";

// Delete Cart

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <div className="min-h-screen bg-gray-300 py-8 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Your Cart</h3>
      <div className="space-y-6">
        {cartItems.map((item: CartItem) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center bg-gray-200 shadow-md rounded-lg p-4"
          >
            {/* Image Section */}
            <div className="flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                height={150}
                width={150}
                className="rounded-md object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="mt-4 md:mt-0 md:ml-4 flex-grow text-center md:text-left">
              <h5 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h5>
              <h5 className="text-lg font-medium text-gray-600 mt-2">
                ${item.price}
              </h5>
            </div>

            {/* Button Section */}
            <button
              className="mt-4 md:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartpage;
