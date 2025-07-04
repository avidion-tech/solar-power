"use client";
import React from "react";
import { Star, ShoppingCart, Award, Zap, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

interface BestsellerProduct {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  specs: string[];
  badge?: string;
  discount?: number;
  soldCount: number;
}

const bestsellerProducts: BestsellerProduct[] = [
  {
    id: "bs1",
    name: "WAAREE 10Wp 12V Polycrystalline Small Solar Module",
    brand: "WAAREE",
    price: 1249,
    originalPrice: 1450,
    rating: 4.8,
    reviewCount: 1247,
    image:
      "https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=500",
    specs: ["10W Output", "12V System", "Polycrystalline", "Compact Size"],
    badge: "#1 Bestseller",
    discount: 14,
    soldCount: 5420,
  },
  {
    id: "bs2",
    name: "WAAREE Black/Blue 365Wp 132 Cells Mono PERC Solar Panel",
    brand: "WAAREE",
    price: 6199,
    originalPrice: 7200,
    rating: 4.9,
    reviewCount: 892,
    image:
      "https://images.pexels.com/photos/9875447/pexels-photo-9875447.jpeg?auto=compress&cs=tinysrgb&w=500",
    specs: ["365W Output", "Mono PERC", "132 Cells", "Black Frame"],
    discount: 14,
    soldCount: 3240,
  },
  {
    id: "bs3",
    name: "Waaree 50Wp Mono PERC 12V Solar PV Module",
    brand: "WAAREE",
    price: 1999,
    originalPrice: 2300,
    rating: 4.7,
    reviewCount: 1156,
    image:
      "https://images.pexels.com/photos/9875435/pexels-photo-9875435.jpeg?auto=compress&cs=tinysrgb&w=500",
    specs: ["50W Output", "Mono PERC", "12V System", "High Efficiency"],
    discount: 13,
    soldCount: 4180,
  },
  {
    id: "bs4",
    name: "WAAREE 3.2 kW On Grid Single Phase Bifacial Topcon DCR Radiance Solar System",
    brand: "WAAREE",
    price: 89999,
    originalPrice: 105000,
    rating: 4.8,
    reviewCount: 324,
    image:
      "https://images.pexels.com/photos/9875421/pexels-photo-9875421.jpeg?auto=compress&cs=tinysrgb&w=500",
    specs: ["3.2kW System", "Bifacial Topcon", "On-Grid", "Complete Kit"],
    badge: "Complete System",
    discount: 14,
    soldCount: 1890,
  },
  {
    id: "bs5",
    name: "Luminous Solar NXG1800 12V 150Ah C10 Tubular Battery",
    brand: "Luminous",
    price: 18500,
    originalPrice: 21000,
    rating: 4.6,
    reviewCount: 756,
    image:
      "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=500",
    specs: ["150Ah Capacity", "Tubular Technology", "12V System", "Long Life"],
    discount: 12,
    soldCount: 2340,
  },
  {
    id: "bs6",
    name: "Microtek Solar Hybrid PCU M-SUN 1135VA Inverter",
    brand: "Microtek",
    price: 12500,
    originalPrice: 14500,
    rating: 4.5,
    reviewCount: 445,
    image:
      "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=500",
    specs: [
      "1135VA Capacity",
      "Hybrid Technology",
      "MPPT Charge Controller",
      "LCD Display",
    ],
    discount: 14,
    soldCount: 1670,
  },
  {
    id: "bs7",
    name: "Polycab Solar DC Cable 4mm² Red/Black (Per Meter)",
    brand: "Polycab",
    price: 45,
    originalPrice: 52,
    rating: 4.9,
    reviewCount: 2340,
    image:
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500",
    specs: [
      "4mm² Cross Section",
      "XLPE Insulation",
      "UV Resistant",
      "IS 14962",
    ],
    discount: 13,
    soldCount: 12450,
  },
  {
    id: "bs8",
    name: "UTL Solar Gamma+ 5kW On-Grid Solar Inverter",
    brand: "UTL Solar",
    price: 42000,
    originalPrice: 48000,
    rating: 4.7,
    reviewCount: 289,
    image:
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500",
    specs: ["5kW Capacity", "Dual MPPT", "WiFi Monitoring", "5 Year Warranty"],
    discount: 13,
    soldCount: 980,
  },
];

const Bestsellers = () => {
  const { addItem, state } = useCart();

  const handleAddToCart = (product: BestsellerProduct) => {
    addItem({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      specs: product.specs,
    });
  };

  const isInCart = (productId: string) => {
    return state.items.some((item) => item.id === productId);
  };

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap size={16} />
            <span>BESTSELLERS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Most Popular Solar Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Top-rated solar equipment trusted by thousands of customers across
            India
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellerProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Rank Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold flex items-center space-x-1">
                    <span>#{index + 1}</span>
                  </div>
                </div>

                {/* Bestseller Badge */}
                {product.badge && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                      -{product.discount}%
                    </span>
                  </div>
                )}

                {/* Sold Count */}
                <div className="absolute bottom-3 left-3">
                  <div className="bg-white/90 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    {product.soldCount.toLocaleString()} sold
                  </div>
                </div>

                {/* In Cart Indicator */}
                {isInCart(product.id) && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-green-500 text-white p-2 rounded-full shadow-lg">
                      <Check size={16} />
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <p className="text-xs text-green-600 font-semibold mb-1">
                    {product.brand}
                  </p>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>

                {/* Key Specs */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-1">
                    {product.specs.slice(0, 4).map((spec, index) => (
                      <div
                        key={index}
                        className="text-xs text-gray-600 flex items-center"
                      >
                        <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                      {product.discount && (
                        <div className="text-xs text-green-600 font-medium">
                          Save ₹
                          {(
                            product.originalPrice! - product.price
                          ).toLocaleString("en-IN")}
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2 ${
                      isInCart(product.id)
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "bg-orange-500 hover:bg-orange-600 text-white hover:scale-105"
                    }`}
                  >
                    {isInCart(product.id) ? (
                      <>
                        <Check size={16} />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={16} />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            View All Bestsellers
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-orange-500">
            <div className="space-y-2">
              <div className="text-3xl font-bold ">50,000+</div>
              <div className="text-gray-600 text-sm">Products Sold</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold ">4.8★</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold ">98%</div>
              <div className="text-gray-600 text-sm">Customer Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold ">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
