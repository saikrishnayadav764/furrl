import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "../styles/productlist.css";

const ProductList = ({ filterId, filterType }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.post(
        "https://api.furrl.in/api/v2/listing/getListingProducts",
        {
          input: {
            page,
            pageSize: 10,
            filters:
              filterType && filterId
                ? [
                    {
                      id: filterId,
                      type: filterType,
                    },
                  ]
                : [],
            id: "#HomeHunts",
            entity: "vibe",
          },
        }
      );
      const newProducts = response.data.data.getListingProducts.products || [];
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setPage((prevPage) => prevPage + 1);
      if (newProducts.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filterType, filterId]);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleShareClick = (product) => {
    const url = window.location.origin + `/product/${product.id}`;
    const title = product.title;
    const text = `Check out this product: ${title}`;

    if (navigator.share) {
      navigator.share({
        title,
        text,
        url,
      }).catch((error) => console.error('Error sharing', error));
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert('Product link copied to clipboard');
      }).catch((error) => console.error('Error copying to clipboard', error));
    }
  };

  // loader={<h4 style={{textAlign:"center"}}>Loading...</h4>}

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchProducts}
      hasMore={hasMore}
      loader={<h4 style={{textAlign:"center", marginBottom: "10px", color: "#7e59e7" }}>Loading...</h4>}
      endMessage={<p style={{ textAlign: "center" }}>You have seen it all</p>}
    >
      <div className="product-list">
        {products.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className={`product-item ${
              index === 2 || (index >= 7 && index % 5 === 2)
                ? "full-width"
                : index >= 1 && index <= 2
                ? "fitms"
                : ""
            }`}
            onClick={() => handleProductClick(product)}
          >
            <div className="product-image-container">
              <img
                src={product.images[0].src}
                alt={product.title}
                className="product-detail-image"
              />
              <div className="svg-icon" onClick={(e) => { e.stopPropagation(); handleShareClick(product); }}>
                <svg width="44" height="44" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
                  <g filter="url(#filter0_d_6238_38939)">
                    <rect x="4" y="4.82983" width="36" height="36" rx="18" fill="#4B5563"></rect>
                    <path d="M17.3895 19.8139H16.4565C14.4215 19.8139 12.7715 21.4639 12.7715 23.4989V28.3739C12.7715 30.4079 14.4215 32.0579 16.4565 32.0579H27.5865C29.6215 32.0579 31.2715 30.4079 31.2715 28.3739V23.4889C31.2715 21.4599 29.6265 19.8139 27.5975 19.8139H26.6545" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M22.0215 13.0204V25.0614" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M19.1064 15.9486L22.0214 13.0206L24.9374 15.9486" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                  <defs>
                    <filter id="filter0_d_6238_38939" x="0" y="0.829834" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6238_38939"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6238_38939" result="shape"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="product-brand">{product.brand[0].name}</p>
            <p className="product-title">{product.title}</p>
            <div className="prs">
              <p className="product-price">
                Rs: {product.price.value}<span className="mrp">Rs: {product.MRP.value}</span>
                <span className="disc"> {product.discountPercent}%</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ProductList;
