"use client";
import React from "react";
import { Star, ShoppingCart, Heart, Award, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import Image from "next/image";

interface Product {
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
  certification?: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Monocrystalline Solar Panel 540W",
    brand: "Waaree Energies",
    price: 18500,
    originalPrice: 21000,
    rating: 4.8,
    reviewCount: 324,
    image: "/image-1.svg",
    specs: [
      "540W Output",
      "21.5% Efficiency",
      "25 Year Warranty",
      "Tier-1 Module",
    ],
    badge: "Best Seller",
    discount: 12,
    certification: "BIS Certified",
  },
  {
    id: "2",
    name: "On-Grid Solar Inverter 5kW",
    brand: "Luminous Power",
    price: 45000,
    rating: 4.7,
    reviewCount: 189,
    image: "/image-2.svg",
    specs: ["5kW Capacity", "Dual MPPT", "5 Year Warranty", "WiFi Monitoring"],
    badge: "New Launch",
    certification: "CEI Approved",
  },
  {
    id: "3",
    name: "Lithium Solar Battery 100Ah",
    brand: "Exide Technologies",
    price: 65000,
    originalPrice: 72000,
    rating: 4.9,
    reviewCount: 156,
    image: "/image-3.svg",
    specs: [
      "100Ah Capacity",
      "LiFePO4 Technology",
      "10 Year Warranty",
      "BMS Protection",
    ],
    discount: 10,
    certification: "BIS Certified",
  },
  {
    id: "4",
    name: "Rooftop Mounting Structure Kit",
    brand: "Ksolare",
    price: 12500,
    rating: 4.6,
    reviewCount: 267,
    image: "/image-4.svg",
    specs: [
      "Aluminum Rails",
      "Galvanized Hardware",
      "Wind Load 200 km/h",
      "Easy Installation",
    ],
    certification: "IS 2062 Grade",
  },
  {
    id: "5",
    name: "Solar Water Heater 200L ETC",
    brand: "Racold Thermo",
    price: 28500,
    originalPrice: 32000,
    rating: 4.5,
    reviewCount: 198,
    image: "/image-5.svg",
    specs: [
      "200L Capacity",
      "Evacuated Tube",
      "5 Year Warranty",
      "Magnesium Anode",
    ],
    discount: 11,
    certification: "BIS Certified",
  },
  {
    id: "6",
    name: "MPPT Charge Controller 40A",
    brand: "Microtek",
    price: 8500,
    rating: 4.7,
    reviewCount: 145,
    image: "/image-6.svg",
    specs: [
      "40A Current",
      "MPPT Technology",
      "LCD Display",
      "Multiple Protection",
    ],
    certification: "CE Certified",
  },
  {
    id: "7",
    name: "Solar Street Light 60W",
    brand: "Syska LED",
    price: 15500,
    originalPrice: 18000,
    rating: 4.4,
    reviewCount: 89,
    image: "/image-7.svg",
    specs: ["60W LED", "All-in-One Design", "3 Year Warranty", "Motion Sensor"],
    discount: 14,
    certification: "IP65 Rated",
  },
  {
    id: "8",
    name: "DC Solar Cable 4mm² (100m)",
    brand: "Polycab Wires",
    price: 4500,
    rating: 4.8,
    reviewCount: 234,
    image: "/image-8.svg",
    specs: [
      "4mm² Cross Section",
      "XLPE Insulation",
      "UV Resistant",
      "25 Year Life",
    ],
    certification: "IS 14962 Standard",
  },
];

const ProductGrid = () => {
  const { addItem, state, openCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      specs: product.specs,
      certification: product.certification,
    });

    // Optional: Show a brief success animation or open cart
    setTimeout(() => {
      // You could add a toast notification here
    }, 100);
  };

  const isInCart = (productId: string) => {
    return state.items.some((item) => item.id === productId);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Solar Products
            </h2>
            <p className="text-xl text-gray-600">
              Premium quality solar equipment from India's leading manufacturers
            </p>
          </div>
          <button className="hidden md:block text-orange-500 hover:text-orange-600 font-semibold items-center space-x-2">
            <span>View All Products</span>
            <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative w-full">
                <div className="relative aspect-square w-[75%] mx-auto ">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="group-hover:scale-105 transition-transform duration-300 mx-auto"
                  />
                </div>

                {/* Badges */}
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        product.badge === "Best Seller"
                          ? "bg-orange-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                {product.discount && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                      -{product.discount}%
                    </span>
                  </div>
                )}

                {/* Certification Badge */}
                {product.certification && (
                  <div className="absolute bottom-3 left-3">
                    <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                      <Award size={12} className="text-green-600" />
                      <span className="text-xs font-medium text-green-600">
                        {product.certification}
                      </span>
                    </div>
                  </div>
                )}

                {/* Wishlist */}
                <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart
                    size={14}
                    className="text-gray-600 hover:text-red-500"
                  />
                </button>

                {/* In Cart Indicator */}
                {isInCart(product.id) && (
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-green-500 text-white p-1 rounded-full">
                      <Check size={12} />
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2">
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

                {/* Specs */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {product.specs.slice(0, 3).map((spec, index) => (
                      <li
                        key={index}
                        className="text-xs text-gray-600 flex items-center"
                      >
                        <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and Cart */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
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
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      isInCart(product.id)
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "bg-orange-500 hover:bg-orange-600 text-white hover:scale-105"
                    }`}
                  >
                    {isInCart(product.id) ? (
                      <Check size={16} />
                    ) : (
                      <ShoppingCart size={16} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Mobile */}
        <div className="md:hidden text-center mt-8">
          <button className="text-orange-500 hover:text-orange-600 font-semibold">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
