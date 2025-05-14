import React from 'react';

const Header = () => {
  return (
    <div className="text-center px-4 py-8 sm:py-10 md:py-12 lg:py-16">
      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
        Welcome, Alex!
      </h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-2">
        Here are your AI avatars:
      </p>
    </div>
  );
};

export default Header;
