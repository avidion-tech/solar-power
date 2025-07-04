import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  productCount: number;
  image: string;
  color: string;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Solar Panels',
    description: 'Monocrystalline, Polycrystalline, Bifacial panels from 100W to 540W',
    productCount: 245,
    image: 'https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: '2',
    name: 'Solar Inverters',
    description: 'String, Hybrid, Off-grid inverters from 1kW to 100kW capacity',
    productCount: 156,
    image: 'https://images.pexels.com/photos/9875421/pexels-photo-9875421.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-green-400 to-green-600'
  },
  {
    id: '3',
    name: 'Solar Batteries',
    description: 'Lithium-ion, Tubular, Gel batteries for energy storage',
    productCount: 89,
    image: 'https://images.pexels.com/photos/9875435/pexels-photo-9875435.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: '4',
    name: 'Mounting Structures',
    description: 'Rooftop, Ground mount, Elevated structures for all installations',
    productCount: 178,
    image: 'https://images.pexels.com/photos/9875447/pexels-photo-9875447.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: '5',
    name: 'Solar Water Heaters',
    description: 'ETC, FPC solar water heating systems 100L to 1000L',
    productCount: 67,
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    id: '6',
    name: 'Solar Lights',
    description: 'Street lights, Garden lights, Home lighting systems',
    productCount: 134,
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    id: '7',
    name: 'Charge Controllers',
    description: 'PWM, MPPT charge controllers for battery charging',
    productCount: 78,
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-teal-400 to-teal-600'
  },
  {
    id: '8',
    name: 'Cables & Accessories',
    description: 'DC cables, MC4 connectors, Junction boxes, Fuses',
    productCount: 298,
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-red-400 to-red-600'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete range of solar products for residential, commercial and industrial applications. All products are BIS certified and carry manufacturer warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              } ${index === 1 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              {/* Image Background */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`}></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="space-y-2">
                  <h3 className="text-xl lg:text-2xl font-bold">{category.name}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{category.description}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-white/80 text-sm">
                      {category.productCount} products
                    </span>
                    <div className="flex items-center space-x-2 text-sm font-medium group-hover:text-orange-300 transition-colors">
                      <span>Shop Now</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;