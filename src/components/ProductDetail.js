
import React from 'react';
import { useLocation } from 'react-router-dom';
import ContactSection from './ContactSection';
import CopyrightInfo from './CopyrightInfo';
import FooterMenu from './FooterMenu';
import FurrlInNewsSection from './FurrlInNewsSection';
import JoinTheTribeInstagram from './JoinTheTribeInstagram';
import AppLinks from './AppLinks'
import '../styles/productdetail.css';

const ProductDetail = () => {
  const { state } = useLocation();
  const { product } = state || {};

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <p>{product.description}</p>
      <img src={product.images[0].src} alt={product.title} className="product-detail-image" />
      <p className="product-brand">{product.brand[0].name}</p>
      <p className="product-title">{product.title}</p>
      <p className="product-price">
        Rs: {product.price.value} <span className="mrp">Rs: {product.MRP.value}</span> {product.discountPercent}%
      </p>
      <ContactSection />
      <FurrlInNewsSection />
      <JoinTheTribeInstagram />
      <FooterMenu />
      <AppLinks/>
      <CopyrightInfo />
  

    </div>
  );
};

export default ProductDetail;
