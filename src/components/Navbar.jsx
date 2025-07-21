
import React, { useState, useEffect } from 'react';
import {  useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Utensils, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    const storedUserData = localStorage.getItem('userData');

    if (loginStatus === 'true' && storedUserData) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUserData));
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    setUserData(null);
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/recipes', label: 'Recipes' },
    { path: '/blog', label: 'Blog' },
    ...(isLoggedIn ? [{ path: '/dashboard', label: 'Dashboard' }] : []),
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-3 rounded-2xl shadow-lg"
            >
              <Utensils className="h-7 w-7 text-white" />
            </motion.div>
            <span className="text-2xl font-bold bg bg-teal-600 bg-clip-text text-transparent">
              Nutri Flow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-md'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className={`flex items-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive('/profile')
                      ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-md'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50'
                  }`}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-2">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  {userData?.name || 'Profile'}
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-emerald-600 hover:text-emerald-700 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-50 transition-all duration-300"
                >
                  Login
                </Link>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Sign Up
                  </Link>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 p-2 rounded-lg hover:bg-emerald-50 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-lg border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-teal-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/profile"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-3">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      {userData?.name || 'Profile'}
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-3 rounded-xl text-base font-semibold bg-gradient-to-r from-red-500 to-red-600 text-white mt-3 hover:from-red-600 hover:to-red-700 transition-all duration-300"
                    >
                      <LogOut className="h-4 w-4 mr-3" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-xl text-base font-semibold text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-xl text-base font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white mt-3 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
