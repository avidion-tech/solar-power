import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Sun,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <div className="bg-orange-500 text-white p-2 rounded-lg mr-3">
                <Sun size={24} />
              </div>
              <span className="text-2xl font-bold">SolarPower India</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              India's leading solar equipment supplier, providing premium
              quality solar panels, inverters, batteries and complete solar
              solutions for residential, commercial and industrial applications.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Solar Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solar Products</h3>
            <ul className="space-y-3">
              {[
                "Solar Panels",
                "Solar Inverters",
                "Solar Batteries",
                "Mounting Structures",
                "Solar Water Heaters",
                "Solar Lights",
                "Charge Controllers",
                "Cables & Accessories",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Solar Installation",
                "System Design",
                "Maintenance & AMC",
                "Technical Consultation",
                "Subsidy Assistance",
                "Financing Support",
                "Project Management",
                "After Sales Service",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-orange-500 mt-1 flex-shrink-0"
                />
                <div className="text-gray-400 text-sm">
                  <p>676, Sector-42, Gurugram, Haryana, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-orange-500 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <a href="tel:+91 9896584099">+91 9896584099</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-orange-500 flex-shrink-0" />
                <a
                  href="mailto:info@avidion.ai"
                  className="text-gray-400 text-sm"
                >
                  info@avidion.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Avidion Softwares Pvt. Ltd.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Shipping Policy",
                "Return & Refund",
                "Warranty Policy",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {/* <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Authorized Dealer & Certified by:</p>
              <div className="flex justify-center space-x-6 text-xs text-gray-500">
                <span>BIS (Bureau of Indian Standards)</span>
                <span>•</span>
                <span>MNRE (Ministry of New & Renewable Energy)</span>
                <span>•</span>
                <span>CEI (Central Electrical Inspector)</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
