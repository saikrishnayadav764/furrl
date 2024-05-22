import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import TotalProducts from './TotalProducts'
import axios from 'axios';


const HorizontalScrollbar = () => {
  const [renderItems, setRenderItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState({ filterType: "", filterId: "" });


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post('https://api.furrl.in/api/v2/listing/getListingFilters', {
        id: "#HomeHunts",
        entity: "vibe"
      });
      const filters = response.data.data.getListingFilters.easyFilters;
      setRenderItems(filters);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterItemClick = (filterType, filterId) => {
    setSelectedFilter(prevSelectedFilter => {
      if (prevSelectedFilter.filterId === filterId) return prevSelectedFilter;
      return { filterType, filterId };
    });
  };

  return (
    <>
      <div className='top'>
      </div>
      <TotalProducts/>
      <div className="horizontal-scrollbar">
        <div className="scroll-content">
          {renderItems.map((item, index) => (
            <div key={index} className="filter-item" onClick={() => handleFilterItemClick(item.contentType, item.uniqueId)}>
              {item.name}
            </div>
          ))}
        </div>
        <style jsx>{`
          .horizontal-scrollbar {
            width: 100%;
            overflow-x: auto;
          }
          .scroll-content {
            display: flex;
            white-space: nowrap;
            padding: 10px;
          }
          .filter-item {
            padding: 5px 10px;
            margin-right: 10px;
            border-radius: 200px;
            background-color: white;
            border: 1px solid #ccc;
            display: inline-block;
            cursor: pointer;
            border-radius: 200px !important;
            display: flex !important;
            padding: 6px 10px !important;
            justify-content: center !important;
            align-items: center !important;
            margin: 0 5px 4px !important;
            font-family: Montserrat !important;
            font-size: 12px !important;
            font-style: normal !important;
            font-weight: 400 !important;
            line-height: 14.6px !important;
            letter-spacing: .12px !important;
            max-width: 360px
            min-height: 27px !important;
            text-transform: capitalize !important;
            
          }
          .filter-item:hover {
            color: white;
            background-color: var(--Furrl---Primary, #7e59e7) !important;
          }
        `}</style>
      </div>
      <ProductList key={selectedFilter.filterId} filterType={selectedFilter.filterType} filterId={selectedFilter.filterId} />
    </>
  );
};

export default HorizontalScrollbar;
