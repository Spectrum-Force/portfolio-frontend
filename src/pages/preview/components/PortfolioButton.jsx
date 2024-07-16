import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioButton = () => {
  return (
    <a href="#portfolio" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      See My Portfolio
    </a>
  );
};

export default PortfolioButton;