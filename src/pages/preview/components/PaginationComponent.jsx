import React, { useState } from 'react';

// Mock data for the cards
const cardsData = [
  { id: 1, imageSrc: '/path/to/src/assets/images/camera.png', text: 'Branding' },
  { id: 2, imageSrc: '/path/to/development-image.jpg', text: 'Development' },
  { id: 3, imageSrc: '/path/to/seo-image.png', text: 'SEO' },
  { id: 4, imageSrc: '/path/to/design-image.jpg', text: 'Design' },
  { id: 5, imageSrc: '/path/to/photography-image.jpg', text: 'Photography' },
  { id: 6, imageSrc: '/path/to/marketing-image.jpg', text: 'Marketing' },
];

// Card component
const Card = ({ imageSrc, text }) => (
  <div className="border p-4 rounded shadow-md flex flex-col items-center h-60 w-80 pt-5 hover:bg-blue-500 hover:text-white transition-colors">
    <img src={imageSrc} alt={text} className="h-24 mb-2" />
    <p className="text-lg font-bold">{text}</p>
  </div>
);

const PaginationComponent = () => {
  // States for managing current page and items per page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page

  // Calculate the indices of the items to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the cards data to get only the items for the current page
  const currentItems = cardsData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(cardsData.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mx-10 pt-10" id="services">
      <div className="flex justify-center items-center text-2xl text-blue-600">
        <h3>Services</h3>
      </div>
      <div>
        <h1 className="text-4xl text-white flex justify-center items-center">
          I'm Available For Hire
        </h1>
      </div>
      <div className="flex justify-between mb-4 pt-4">
        {currentItems.map((card) => (
          <Card key={card.id} imageSrc={card.imageSrc} text={card.text} />
        ))}
      </div>
      <div className="flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationComponent;
