import React from "react";
import { ArrowRight, Zap, Shield, Award, Sun } from "lucide-react";

const Hero = () => {
  return (
    <section className=" py-12 lg:py-20 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                <Sun size={16} />
                <span>MAKE IN INDIA CERTIFIED</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-normal text-gray-900 leading-tight">
                Power your home with
                <span className="text-orange-500"> solar energy</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                India's leading solar equipment supplier. Get premium quality
                solar panels, inverters, and complete solar solutions with
                government subsidy assistance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
                <span>Shop Solar Products</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Free Quote
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-orange-500" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">
                  25 Year Warranty
                </h3>
                <p className="text-sm text-gray-600">Performance guarantee</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="text-orange-500" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">High Efficiency</h3>
                <p className="text-sm text-gray-600">Up to 22.5% efficiency</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="text-orange-500" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">
                  Certified Installation
                </h3>
                <p className="text-sm text-gray-600">Expert technicians</p>
              </div>
            </div>
          </div>

          {/* Right Content - Solar Panel Display */}
          <div className="relative">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              src="/hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="relative z-10 p-8 ">
              <div className="aspect-square bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Sun size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Monocrystalline Solar Panel
                  </h3>
                  <p className="text-orange-100">540W High Efficiency Module</p>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-white">₹18,500</div>
                    <div className="text-orange-100">Per panel</div>
                  </div>
                </div>
              </div>
            </div>
          

          {/* Floating Card - Government Subsidy */}
          <div className="z-10 absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <div className="text-green-600 font-bold text-lg">40%</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Govt. Subsidy</div>
                <div className="text-sm text-gray-600">
                  Available on rooftop solar
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card - Savings */}
          <div className="z-10 absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">₹2,500</div>
              <div className="text-sm text-gray-600">Monthly savings</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
