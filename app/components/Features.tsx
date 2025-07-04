import React from 'react';
import { Truck, Shield, Headphones, Award, CreditCard, Sun, MapPin, Users } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Pan India Delivery',
    description: 'Free shipping on orders above ₹25,000 across India',
    color: 'text-blue-500'
  },
  {
    icon: Shield,
    title: '25 Year Warranty',
    description: 'Comprehensive performance warranty on solar panels',
    color: 'text-green-500'
  },
  {
    icon: Headphones,
    title: '24/7 Technical Support',
    description: 'Expert assistance for installation and maintenance',
    color: 'text-purple-500'
  },
  {
    icon: Award,
    title: 'BIS Certified Products',
    description: 'All products meet Indian quality standards',
    color: 'text-orange-500'
  },
  {
    icon: Sun,
    title: 'Subsidy Assistance',
    description: 'Help with government solar subsidy applications',
    color: 'text-yellow-500'
  },
  {
    icon: Users,
    title: 'Expert Installation',
    description: 'Certified technicians for professional installation',
    color: 'text-indigo-500'
  },
  {
    icon: CreditCard,
    title: 'Easy EMI Options',
    description: 'Flexible payment plans and financing available',
    color: 'text-teal-500'
  },
  {
    icon: MapPin,
    title: 'Local Service Centers',
    description: 'Service support in 500+ cities across India',
    color: 'text-red-500'
  }
];

const Features = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SolarPower India?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's most trusted solar equipment supplier with comprehensive support from purchase to installation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={28} className={feature.color} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">50,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
              <div className="text-gray-600">MW Installed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;