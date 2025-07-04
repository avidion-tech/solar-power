"use client";

import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ShoppingBag,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <a href="tel:+91 9896584099">+91 9896584099</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <a href="mailto:info@avidion.ai">info@avidion.ai</a>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin size={14} />
              <span>Pan India Delivery</span>
            </div>
          </div>
          {/* <div className="flex items-center space-x-4 text-xs">
            <span>FREE INSTALLATION CONSULTATION</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">
              SUBSIDY ASSISTANCE AVAILABLE
            </span>
          </div> */}
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="bg-orange-500 text-white p-2 rounded-lg mr-2">
                  <div className="w-6 h-6 flex items-center justify-center font-bold">
                    ☀
                  </div>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  SolarPower India
                </span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search solar panels, inverters, batteries, mounting structures..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
                <User size={20} />
                <span className="text-sm">My Account</span>
              </div>
              <Link
                href="/cart"
                className="relative flex items-center space-x-2 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors group"
              >
                {totalItems > 0 ? (
                  <div className="relative">
                    <ShoppingBag
                      size={20}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                      {totalItems > 99 ? "99+" : totalItems}
                    </div>
                  </div>
                ) : (
                  <ShoppingCart size={20} />
                )}
                <span className="text-sm">Cart</span>
                {totalItems > 0 && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <Link
                href="/cart"
                className="relative text-gray-700 hover:text-orange-500 transition-colors"
              >
                {totalItems > 0 ? (
                  <div className="relative">
                    <ShoppingBag size={24} />
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                      {totalItems > 99 ? "99+" : totalItems}
                    </div>
                  </div>
                ) : (
                  <ShoppingCart size={24} />
                )}
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        {/* <nav className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {[
                "All Products",
                "Solar Panels",
                "Solar Inverters",
                "Solar Batteries",
                "Mounting Structures",
                "Solar Water Heaters",
                "Solar Lights",
                "Charge Controllers",
                "Cables & Accessories",
              ].map((category) => (
                <a
                  key={category}
                  href="#"
                  className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-orange-500 hover:border-orange-500 transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </nav> */}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              {[
                "All Products",
                "Solar Panels",
                "Solar Inverters",
                "Solar Batteries",
                "Mounting Structures",
                "Solar Water Heaters",
                "Solar Lights",
                "Charge Controllers",
                "Cables & Accessories",
              ].map((category) => (
                <a
                  key={category}
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
