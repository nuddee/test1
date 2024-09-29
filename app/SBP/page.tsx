'use client';

import React from 'react';
import Link from 'next/link';
import { Breadcrumbs, Typography } from '@mui/material';

const ProductGrid: React.FC = () => {
  const products = [
    { category: 'BIRD', image: '/images/bird.webp' },
    { category: 'CAT', image: '/images/cat1.jpg' },
    { category: 'CAT', image: '/images/cat2.avif' },
    { category: 'DOG', image: '/images/dog1.webp' },
    { category: 'DOG', image: '/images/dog2.jpg' },
    { category: 'FISH', image: '/images/fish.webp' },
    { category: 'Small animal', image: '/images/rabbit.webp' },
  ];

  return (
    <div>
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs" separator=">">
        <Link href="/">Home</Link>
        <Typography color="textPrimary">All Product</Typography>
      </Breadcrumbs>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.image} alt={product.category} />
            <div className="product-label">{product.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
