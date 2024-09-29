'use client';

import { useState, useEffect } from 'react';
import { Button, Breadcrumbs, Typography, Modal, Box } from '@mui/material';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Product {
  _id: string;
  product_name: string;
  price: number;
  img: string;
  description: string;
}

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  bgcolor: 'background.paper',
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
  overflowY: 'auto', // Enable vertical scrolling
  maxHeight: '80vh',  // Limit the modal height
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart(); // Access cart context

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart({ id: product._id, name: product.product_name, price: product.price, quantity: 1 });
    
    // Trigger a cool toast notification
    toast.success('🛒 Product added to cart successfully!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      
    });
    
    handleClose();
  };

  const handleOpen = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <ToastContainer /> {/* Toast container to display the alerts */}
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs" separator=">">
        <Link href="/">Home</Link>
        <Typography color="textPrimary">All Products</Typography>
      </Breadcrumbs>

      <div className="container">
        <h1 className="page-title">All Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card" onClick={() => handleOpen(product)}>
              <img src={product.img} alt={product.product_name} className="product-image" />
              <h2 className="product-title">{product.product_name}</h2>
              <p className="product-price">${product.price}</p>
              <Button
                className="add-button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent closing the modal when clicking "Add to Cart"
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for showing product details */}
      <Modal
        open={Boolean(selectedProduct)}
        onClose={handleClose}
        aria-labelledby="product-details-title"
        aria-describedby="product-details-description"
      >
        <Box sx={modalStyle}>
          {selectedProduct && (
            <>
              <img
                src={selectedProduct.img}
                alt={selectedProduct.product_name}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <Typography variant="h5" id="product-details-title" gutterBottom>
                {selectedProduct.product_name}
              </Typography>
              <Typography variant="body1" id="product-details-description" gutterBottom>
                {selectedProduct.description}
              </Typography>
              <Typography variant="h6">Price: ${selectedProduct.price}</Typography>
              <Box display="flex" justifyContent="space-between" marginTop={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#48bb78',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#38a169', // Darker shade for hover effect
                    },
                  }}
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  Add to Cart
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
