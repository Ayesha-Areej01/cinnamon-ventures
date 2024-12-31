"use client";
import useBasketStore from "@/app/categories/[slug]/store";
import { Product } from "@/sanity.types";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface AddToBasketButtonProps {
    product: Product;
    disabled?: boolean;
}

function AddToBasketButton({ product, disabled }: AddToBasketButtonProps) {
    const { addItem, removeItem, getItemCount } = useBasketStore();
    const initialItemCount = getItemCount(product._id);
    const [itemCount, setItemCount] = useState(initialItemCount);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => setIsClient(true), []);

    useEffect(() => {
        setItemCount(getItemCount(product._id));
    }, [getItemCount, product._id]);

    if (!isClient) {
        return null;
    }

    const handleIncrement = () => {
        setItemCount(prevCount => prevCount + 1);
    };

    const addToCart = () => {
        for (let i = 0; i < itemCount; i++) {
            addItem(product);
        }
        setItemCount(prevCount => prevCount + 1);
    }

    const handleDecrement = () => {
        if (itemCount > 0) {
            removeItem(product._id);
            setItemCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
        }
    };

    const isOutOfStock = product.stock === 0;

    return (
        <div className="grid-cols-1 space-y-4">
            <div className="flex items-center justify-center space-x-2">
                <button
                    onClick={handleDecrement}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        itemCount === 0
                            ? "bg-gray-200 cursor-not-allowed"
                            : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    disabled={itemCount === 0 || disabled}
                >
                    <span
                        className={`text-xl font-bold ${
                            itemCount === 0 ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        -
                    </span>
                </button>
                <span className="w-8 text-center font-semibold">{itemCount}</span>
                <button
                    onClick={handleIncrement}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        disabled
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#587927] hover:bg-[#384f16]"
                    }`}
                    disabled={disabled}
                >
                    <span className="text-xl font-bold text-white">+</span>
                </button>
            </div>
            <div className=" justify-center ">
            <Button
            className="bg-[#587927] hover:bg-[#384f16] "
            onClick={addToCart} disabled={disabled || isOutOfStock}>
                    {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                </Button>
            </div>
        </div>
    );
}

export default AddToBasketButton;