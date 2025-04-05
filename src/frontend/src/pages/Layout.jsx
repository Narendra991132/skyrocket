import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { FaPlane, FaUser, FaSignOutAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import icon from '../assets/skyrocketlogo.webp';
import { PROJECT_NAME } from "../utils/constants";

const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/" className="flex items-center group">
                <img src={icon} alt="Flighter Logo" className="h-10 mr-3 rounded-full transition-transform group-hover:scale-105" />
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">{PROJECT_NAME}</h1>
              </Link>
              <button
                className="md:hidden text-gray-600 focus:outline-none hover:text-rose-500 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  )}
                </svg>
              </button>
            </div>
            <nav className={`mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-rose-500 transition-colors flex items-center">
                    <FaPlane className="mr-2" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/flights" className="text-gray-600 hover:text-rose-500 transition-colors flex items-center">
                    <FaPlane className="mr-2" />
                    Flights
                  </Link>
                </li>
                {!user && (
                  <>
                    <li>
                      <Link to="/login" className="text-gray-600 hover:text-rose-500 transition-colors flex items-center">
                        <FaUser className="mr-2" />
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition-colors">
                        Register
                      </Link>
                    </li>
                  </>
                )}
                {user && (
                  <li>
                    <Link to="/my-bookings" className="text-gray-600 hover:text-rose-500 transition-colors flex items-center">
                      <FaPlane className="mr-2" />
                      My Bookings
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
            {user && (
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <div className="flex items-center">
                  <img
                    src={`https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1`}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-rose-100"
                  />
                  <span className="ml-2 text-gray-700 font-medium">{user.username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full transition-colors flex items-center"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <img src={icon} alt="Logo" className="h-8 mr-2" />
                <h4 className="text-xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">{PROJECT_NAME}</h4>
              </div>
              <p className="text-gray-600">Your gateway to the skies. Book your flights with ease and comfort.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
            &copy; {new Date().getFullYear()} {PROJECT_NAME}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
