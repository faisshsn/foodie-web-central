
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">FoodieExpress</h3>
            <p className="text-gray-400">
              The best food delivery platform for your favorite meals.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Cuisines</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/?cuisine=italian" className="text-gray-400 hover:text-white transition">
                  Italian
                </Link>
              </li>
              <li>
                <Link to="/?cuisine=asian" className="text-gray-400 hover:text-white transition">
                  Asian
                </Link>
              </li>
              <li>
                <Link to="/?cuisine=american" className="text-gray-400 hover:text-white transition">
                  American
                </Link>
              </li>
              <li>
                <Link to="/?cuisine=indian" className="text-gray-400 hover:text-white transition">
                  Indian
                </Link>
              </li>
              <li>
                <Link to="/?cuisine=middle-eastern" className="text-gray-400 hover:text-white transition">
                  Middle Eastern
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Food Street</p>
              <p>Foodtown, FD 12345</p>
              <p className="mt-2">support@foodieexpress.com</p>
              <p>(123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} FoodieExpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
