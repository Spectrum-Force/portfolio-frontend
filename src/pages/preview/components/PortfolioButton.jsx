import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioButton = () => {
  return (
    <Link to="/portfolio" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      See my portfolio
    </Link>
  );
};

export default PortfolioButton;