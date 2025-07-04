"use client";
import React, { useState } from "react";
import { Mail, ArrowRight, Sun } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12 text-center shadow-xl">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Sun size={32} className="text-orange-500" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated with Solar Industry News
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Get latest updates on solar technology, government policies,
              subsidy schemes and exclusive offers delivered to your inbox.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight size={20} />
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              Join 25,000+ solar enthusiasts. Unsubscribe anytime.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-orange-500 font-semibold mb-1">
                  Weekly Updates
                </div>
                <div className="text-sm text-gray-600">
                  Latest solar news & trends
                </div>
              </div>
              <div className="text-center">
                <div className="text-orange-500 font-semibold mb-1">
                  Exclusive Offers
                </div>
                <div className="text-sm text-gray-600">
                  Special discounts for subscribers
                </div>
              </div>
              <div className="text-center">
                <div className="text-orange-500 font-semibold mb-1">
                  Policy Updates
                </div>
                <div className="text-sm text-gray-600">
                  Government schemes & subsidies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
