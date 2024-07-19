import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioButton = () => {
  return (
    <a href="#portfolio" className="bg-blue-500 text-white px-4 py-2 rounded-md md:px-6 md:py-3 lg:px-8 lg:py-4">
      See My Portfolio
    </a>
  );
};

export default PortfolioButton;