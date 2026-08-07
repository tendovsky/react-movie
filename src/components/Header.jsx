import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  const navItems = [
    { name: 'Upcoming', href: '#' },
    { name: 'Shows', href: '#' },
    { name: 'Fanart', href: '#' },
    { name: 'Plans', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Account', href: '#' },
  ];

  return (
    <header className="w-full fixed z-50 top-0 left-0 bg-transparent py-4 px-8 flex items-center justify-between text-white font-sans backdrop-blur-sm">
      {/* Логотип */}
      <div className="flex items-center space-x-1 cursor-pointer select-none">
        <span className="text-3xl font-serif text-purple-600 font-bold leading-none">
          C
        </span>
        <span className="text-xl font-serif tracking-tight leading-none text-gray-100">
          ine <span className="font-serif">Sphere</span>
        </span>
      </div>

      {/* Навигация и Поиск */}
      <div className="flex items-center space-x-8">
        <nav className="flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-normal text-gray-200 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Иконка поиска */}
        <button
          type="button"
          aria-label="Search"
          className="text-gray-200 hover:text-white transition-colors duration-200 p-1 focus:outline-none"
        >
          <FiSearch className="w-5 h-5 stroke-[2]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
