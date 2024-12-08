import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-steelBlue text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-lg font-semibold">
              SANUX TECHNOLOGIES
            </a>
          </div>

          {/** Search
          <div className="hidden md:flex flex-grow bg-red-500 justify-center mx-56">
            <input
              type="text"
              placeholder="Search..."
              className=" px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
            />
          </div>
          */}

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-gray-200">
              Home
            </a>
            <a href="/about" className="hover:text-gray-200">
              About
            </a>
            <a href="/services" className="hover:text-gray-200">
              Services
            </a>
            <a href="/contact" className="hover:text-gray-200">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steelBlue-700"
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steelBlue-700"
            >
              About
            </a>
            <a
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steelBlue-700"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steelBlue-700"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-steelBlue text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-red-500">
        <div className="flex flex-col md:flex-col justify-center items-center bg-green-500">
          {/* Footer Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="/privacy" className="hover:text-gray-200">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-200">Terms of Service</a>
            <a href="/contact" className="hover:text-gray-200">Contact Us</a>
          </div>

          {/* Copyright Info */}
          <div className="text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Sanuxtech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
