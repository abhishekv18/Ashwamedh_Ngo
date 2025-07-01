// src/components/common/Header/Navigation.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Who We Are',
      hasDropdown: true,
      subItems: [
        { name: 'About Us', path: '/who-we-are/about-us' },
        { name: 'Why Children?', path: '/who-we-are/why-children' },
        { name: 'Our Approach', path: '/who-we-are/our-approach' }
      ]
    },
    {
      name: 'What We Do',
      hasDropdown: true,
      subItems: [
        { name: 'Programs', path: '/what-we-do/programs' },
        { name: 'Projects', path: '/what-we-do/projects' },
        { name: 'Activities', path: '/what-we-do/activities' },
        { name: 'Impact Stories', path: '/what-we-do/impact-stories' }
      ]
    },
    { name: 'Get Involved', path: '/get-involved' },
    
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const isActiveDropdown = (subItems) => {
    return subItems.some(item => location.pathname === item.path);
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationItems.map((item, index) => (
        <div key={index} className="relative group">
          {item.hasDropdown ? (
            <div
              className="relative"
              onMouseEnter={() => {
                if (item.name === 'Who We Are') setIsWhoWeAreOpen(true);
                if (item.name === 'What We Do') setIsWhatWeDoOpen(true);
              }}
              onMouseLeave={() => {
                if (item.name === 'Who We Are') setIsWhoWeAreOpen(false);
                if (item.name === 'What We Do') setIsWhatWeDoOpen(false);
              }}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActiveDropdown(item.subItems)
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                <span>{item.name}</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    (item.name === 'Who We Are' && isWhoWeAreOpen) ||
                    (item.name === 'What We Do' && isWhatWeDoOpen)
                      ? 'rotate-180' 
                      : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 transition-all duration-200 ${
                  (item.name === 'Who We Are' && isWhoWeAreOpen) ||
                  (item.name === 'What We Do' && isWhatWeDoOpen)
                    ? 'opacity-100 visible transform translate-y-0'
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                      isActiveLink(subItem.path)
                        ? 'text-orange-600 bg-orange-50 border-r-3 border-orange-600'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                    }`}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              to={item.path}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActiveLink(item.path)
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;