import React, { useState, useEffect } from "react";
import axios from "axios";

const TotalProducts = () => {
  const [totalProducts, setTotalProducts] = useState(null);

  useEffect(() => {
    const fetchTotalProducts = async () => {
      try {
        const response = await axios.post(
          "https://api.furrl.in/api/v2/listing/getListingProducts",
          {
            input: {
              page: 1,
              pageSize: 10,
              filters: [],
              id: "#HomeHunts",
              entity: "vibe",
            },
          }
        );
        if (
          response.data &&
          response.data.data &&
          response.data.data.getListingProducts
        ) {
          const { totalProducts } = response.data.data.getListingProducts;
          setTotalProducts(totalProducts);
        } else {
          console.error("Failed to fetch total products");
        }
      } catch (error) {
        console.error("Error fetching total products:", error);
      }
    };

    fetchTotalProducts();
  }, []);

  return (
    <div className="total-products">
      <p className="count-title">
        Shop Products
        <span className="round"></span>
        <span className="pcount">
          {" "}
          {totalProducts !== null && (
            totalProducts
          )} Products
        </span>
      </p>
    </div>
  );
};

export default TotalProducts;
