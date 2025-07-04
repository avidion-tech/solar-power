"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Award,
  Shield,
  Truck,
  CreditCard,
  Gift,
  Star,
  Heart,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import env from "../../env";

const CartPage = () => {
  const {
    state,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const totalItems = getTotalItems();
  const subtotal = getTotalPrice();
  const deliveryFee =
    subtotal >= env.FREE_SHIPPING_THRESHOLD ? 0 : env.DEFAULT_SHIPPING_COST;
  const promoDiscount = appliedPromo === "SOLAR10" ? subtotal * 0.1 : 0;
  const gst = (subtotal - promoDiscount) * env.GST_RATE;
  const finalTotal = subtotal + deliveryFee + gst - promoDiscount;

  const handleApplyPromo = () => {
    if (promoCode === "SOLAR10") {
      setAppliedPromo("SOLAR10");
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoCode("");
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen  py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag size={64} className="text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our premium solar products and start your journey to
              clean energy
            </p>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-medium mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Continue Shopping</span>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Shopping Cart
              </h1>
              <p className="text-gray-600 mt-1">
                {totalItems} items in your cart
              </p>
            </div>
            {state.items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-600 font-medium transition-colors"
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
              >
                <div className="flex space-x-6">
                  {/* Product Image */}
                  <div className="w-32 h-32 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-xs md:text-sm text-orange-600 font-semibold mb-1">
                          {item.brand}
                        </p>
                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 leading-tight">
                          {item.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-red-50 rounded-lg text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    {/* Certification */}
                    {item.certification && (
                      <div className="flex items-center space-x-2 mb-3">
                        <Award size={16} className="text-green-600" />
                        <span className="text-sm text-green-600 font-medium">
                          {item.certification}
                        </span>
                      </div>
                    )}

                    {/* Key Specs */}
                    <div className="mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 md:gap-2">
                        {item.specs.slice(0, 4).map((spec, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <span className="size-1.5 bg-orange-500 rounded-full mr-2"></span>
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex items-start md:items-center justify-between flex-col gap-2 md:flex-row">
                      <div className="space-y-1">
                        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-3 ">
                          <span className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold text-gray-900">
                            ₹{item.price.toLocaleString("en-IN")}
                          </span>
                          <div className="flex flex-col sm:flex-row gap-2">
                            {item.originalPrice && (
                              <span className="text-sm sm:text-base md:text-lg text-gray-500 line-through">
                                ₹{item.originalPrice.toLocaleString("en-IN")}
                              </span>
                            )}
                            {item.originalPrice && (
                              <span className="bg-red-100 text-red-600 px-1 md:px-2 py-1 rounded text-xs md:text-sm font-medium md:font-semibold">
                                Save ₹
                                {(
                                  item.originalPrice - item.price
                                ).toLocaleString("en-IN")}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-xs md:text-sm text-gray-600 ">
                          Item total: ₹
                          {(item.price * item.quantity).toLocaleString("en-IN")}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center xl:space-x-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="size-6 md:size-8 xl:w-10 xl:h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
                        >
                          <Minus className="size-3 md:size-4" />
                        </button>
                        <span className="w-8 md:w-12 text-center font-bold text-lg">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="size-6 md:size-8 xl:w-10 xl:h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
                        >
                          <Plus className="size-3 md:size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Gift size={16} className="text-green-600" />
                      <span className="text-sm font-medium text-green-700">
                        {appliedPromo} Applied
                      </span>
                    </div>
                    <button
                      onClick={handleRemovePromo}
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Try: SOLAR10 for 10% off
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Subtotal ({totalItems} items)
                  </span>
                  <span className="font-semibold">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                {appliedPromo && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">
                      Promo Discount ({appliedPromo})
                    </span>
                    <span className="font-semibold text-green-600">
                      -₹{promoDiscount.toLocaleString("en-IN")}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    GST ({env.GST_RATE * 100}%)
                  </span>
                  <span className="font-semibold">
                    ₹{gst.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery</span>
                  <span
                    className={`font-semibold ${
                      deliveryFee === 0 ? "text-green-600" : ""
                    }`}
                  >
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>

                {deliveryFee > 0 && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <p className="text-xs text-orange-700">
                      Add ₹
                      {(env.FREE_SHIPPING_THRESHOLD - subtotal).toLocaleString(
                        "en-IN"
                      )}{" "}
                      more for free delivery
                    </p>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      ₹{finalTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
                  <CreditCard size={20} />
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={20} />
                </button>

                <Link
                  href="/"
                  className="w-full border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
