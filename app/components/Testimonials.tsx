"use client";

import React, { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Zap,
  TrendingUp,
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  systemSize: string;
  savings: string;
  rating: number;
  review: string;
  image: string;
  installationDate: string;
  productsPurchased: string[];
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    location: "Gurgaon, Haryana",
    systemSize: "5kW Rooftop Solar",
    savings: "₹3,200/month",
    rating: 5,
    review:
      "Excellent service from SolarPower India! The team was professional, installation was completed in 2 days, and I'm already seeing significant savings on my electricity bill. The WAAREE panels are performing better than expected.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    installationDate: "March 2024",
    productsPurchased: [
      "WAAREE 540W Panels",
      "Luminous 5kW Inverter",
      "Mounting Structure",
    ],
    verified: true,
  },
  {
    id: "2",
    name: "Priya Sharma",
    location: "Pune, Maharashtra",
    systemSize: "3kW Solar System",
    savings: "₹2,100/month",
    rating: 5,
    review:
      "Amazing experience! The subsidy assistance was very helpful, and the technical team explained everything clearly. My electricity bill has reduced by 80%. Highly recommend SolarPower India for quality products and service.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    installationDate: "February 2024",
    productsPurchased: [
      "Microtek Solar Panels",
      "UTL Inverter",
      "Exide Battery",
    ],
    verified: true,
  },
  {
    id: "3",
    name: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    systemSize: "7kW Commercial Setup",
    savings: "₹5,800/month",
    rating: 5,
    review:
      "Outstanding quality and service! Installed solar for my small factory. The ROI is excellent, and the system is performing flawlessly. The 25-year warranty gives me complete peace of mind. Best investment I've made.",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
    installationDate: "January 2024",
    productsPurchased: [
      "WAAREE Bifacial Panels",
      "Luminous Hybrid Inverter",
      "Polycab Cables",
    ],
    verified: true,
  },
  {
    id: "4",
    name: "Sunita Reddy",
    location: "Hyderabad, Telangana",
    systemSize: "4kW Rooftop Solar",
    savings: "₹2,800/month",
    rating: 5,
    review:
      "Fantastic experience from start to finish! The team handled all paperwork for government subsidy. Installation was clean and professional. My neighbors are now planning to install solar after seeing my results.",
    image:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
    installationDate: "April 2024",
    productsPurchased: [
      "Monocrystalline Panels",
      "MPPT Charge Controller",
      "Lithium Battery",
    ],
    verified: true,
  },
  {
    id: "5",
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    systemSize: "6kW Solar System",
    savings: "₹4,200/month",
    rating: 5,
    review:
      "Excellent product quality and after-sales service. The monitoring app helps me track daily generation. In Rajasthan's sunny climate, the system generates more than expected. Very satisfied with the investment.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    installationDate: "December 2023",
    productsPurchased: [
      "High Efficiency Panels",
      "String Inverter",
      "Monitoring System",
    ],
    verified: true,
  },
  {
    id: "6",
    name: "Meera Nair",
    location: "Kochi, Kerala",
    systemSize: "3.5kW Solar Setup",
    savings: "₹2,400/month",
    rating: 5,
    review:
      "Despite Kerala's monsoon season, the solar system performs excellently. The team provided detailed guidance on maintenance. Customer support is responsive and helpful. Great value for money.",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
    installationDate: "May 2024",
    productsPurchased: [
      "Weather Resistant Panels",
      "Hybrid Inverter",
      "Tubular Battery",
    ],
    verified: true,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
    setCurrentTestimonial(testimonials[newIndex]);
  };

  const prevTestimonial = () => {
    const newIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentTestimonial(testimonials[newIndex]);
  };

  const selectTestimonial = (index: number) => {
    setCurrentIndex(index);
    setCurrentTestimonial(testimonials[index]);
  };

  return (
    <section className="py-16 bg-[linear-gradient(135deg,_#FFF7ED_0%,_#FFF_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Quote size={16} />
            <span>CUSTOMER TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from satisfied customers across India who have
            transformed their energy consumption with solar power
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Customer Info Side */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white">
              <div className="space-y-6">
                {/* Customer Profile */}
                <div className="flex items-center space-x-4">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                  />
                  <div>
                    <h3 className="text-xl font-bold">
                      {currentTestimonial.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-orange-100">
                      <MapPin size={14} />
                      <span className="text-sm">
                        {currentTestimonial.location}
                      </span>
                    </div>
                    {currentTestimonial.verified && (
                      <div className="flex items-center space-x-1 mt-1">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-orange-100">
                          Verified Customer
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* System Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap size={16} className="text-yellow-300" />
                      <span className="text-sm text-orange-100">
                        System Size
                      </span>
                    </div>
                    <div className="font-bold">
                      {currentTestimonial.systemSize}
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp size={16} className="text-green-300" />
                      <span className="text-sm text-orange-100">
                        Monthly Savings
                      </span>
                    </div>
                    <div className="font-bold">
                      {currentTestimonial.savings}
                    </div>
                  </div>
                </div>

                {/* Products Purchased */}
                <div>
                  <h4 className="text-sm text-orange-100 mb-2">
                    Products Purchased:
                  </h4>
                  <div className="space-y-1">
                    {currentTestimonial.productsPurchased.map(
                      (product, index) => (
                        <div key={index} className="text-sm flex items-center">
                          <span className="w-1 h-1 bg-orange-300 rounded-full mr-2"></span>
                          {product}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Installation Date */}
                <div className="text-sm text-orange-100">
                  Installed: {currentTestimonial.installationDate}
                </div>
              </div>
            </div>

            {/* Review Side */}
            <div className="p-8">
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < currentTestimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-700">
                    {currentTestimonial.rating}.0
                  </span>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote
                    size={32}
                    className="text-orange-200 absolute -top-2 -left-2"
                  />
                  <p className="text-gray-700 text-lg leading-relaxed pl-8">
                    {currentTestimonial.review}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6">
                  <button
                    onClick={prevTestimonial}
                    className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <ChevronLeft size={20} />
                    <span>Previous</span>
                  </button>

                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => selectTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentIndex
                            ? "bg-orange-500"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <span>Next</span>
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => selectTestimonial(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                index === currentIndex
                  ? "bg-orange-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-orange-50 shadow-md"
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
              />
              <div className="text-sm font-semibold truncate">
                {testimonial.name}
              </div>
              <div className="text-xs opacity-75 truncate">
                {testimonial.location}
              </div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className={`${
                      i < testimonial.rating
                        ? index === currentIndex
                          ? "text-yellow-300 fill-current"
                          : "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                4.9★
              </div>
              <div className="text-gray-600">Average Rating</div>
              <div className="text-sm text-gray-500">From 2,500+ reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
              <div className="text-sm text-gray-500">Customer happiness</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                ₹2.8L
              </div>
              <div className="text-gray-600">Avg. Annual Savings</div>
              <div className="text-sm text-gray-500">Per customer</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
              <div className="text-sm text-gray-500">In solar industry</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Thousands of Satisfied Customers
          </h3>
          <p className="text-gray-600 mb-6">
            Start your solar journey today and experience the same satisfaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
