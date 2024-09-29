'use client';

import { useState, useEffect } from 'react';
import { Button, Modal, Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; // Trash icon for delete buttons

interface Product {
  _id: string;
  product_name: string;
  description: string;
  price: number;
  img: string;
}

export default function ProductsTablePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [openAddModal, setOpenAddModal] = useState(false); // For controlling the "Add Product" modal visibility
  const [openDeleteModal, setOpenDeleteModal] = useState(false); // For controlling the "Delete Products" modal visibility
  const [isSummaryStep, setIsSummaryStep] = useState(false); // To toggle between form and summary
  const [newProduct, setNewProduct] = useState<Product>({
    _id: '',
    product_name: '',
    description: '',
    price: 0,
    img: '',
  });

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products'); // Fetch all products
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  // Add a new product
  const handleSubmitNewProduct = async () => {
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        throw new Error('Failed to add product');
      }

      const addedProduct = await res.json();
      setProducts([...products, addedProduct]); // Add the product to the local state
      handleCloseAddModal(); // Close the modal after adding the product
    } catch (error) {
      console.error(error);
    }
  };

  // Close add product modal and reset form fields
  const handleCloseAddModal = () => {
    setIsSummaryStep(false); // Reset the step to form input
    setOpenAddModal(false); // Close the modal
    // Reset the form fields for the next product
    setNewProduct({
      _id: '',
      product_name: '',
      description: '',
      price: 0,
      img: '',
    });
  };

  // Delete a product
  const handleDeleteClick = async (product: Product) => {
    try {
      const res = await fetch(`/api/products/${product._id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Failed to delete product');
      }

      setProducts(products.filter((p) => p._id !== product._id)); // Remove the product from local state
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="page-title" style={{textDecoration: 'underline', textDecorationThickness:'2px'}}>Stock Management</h1>

      {/* Add and Delete Buttons */}
      <div className="actions">
        {/* Add Product Button */}
        <Button variant="contained" color="primary" onClick={() => setOpenAddModal(true)} className="add-product-button">
          Add Product
        </Button>

        {/* Delete Products Button */}
        <Button variant="outlined" color="error" onClick={() => setOpenDeleteModal(true)} className="delete-products-button" style={{ marginLeft: '10px' }}>
          Delete Products
        </Button>
      </div>

      {/* Table of Products */}
      <TableContainer component={Paper} className="table-container">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>
                  <img
                    src={product.img}
                    alt={product.product_name}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </TableCell>
                <TableCell>{product.product_name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>${product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for Adding New Product */}
      <Modal open={openAddModal} onClose={handleCloseAddModal} aria-labelledby="add-product-modal" aria-describedby="add-product-form">
        <Box className="modal-box">
          {!isSummaryStep ? (
            <>
              <h2 id="add-product-modal">Add New Product</h2>
              <form>
                <TextField
                  fullWidth
                  label="Product Name"
                  name="product_name"
                  value={newProduct.product_name}
                  onChange={(e) => setNewProduct({ ...newProduct, product_name: e.target.value })}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Price"
                  name="price"
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Image URL"
                  name="img"
                  value={newProduct.img}
                  onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  margin="normal"
                />
                <Button variant="contained" color="primary" onClick={() => setIsSummaryStep(true)} style={{ marginTop: '20px' }}>
                  Summary
                </Button>
              </form>
            </>
          ) : (
            <>
              <h2 id="add-product-modal">Summary of New Product</h2>
              <div>
                <p><strong>Product Name:</strong> {newProduct.product_name}</p>
                <p><strong>Price:</strong> ${newProduct.price}</p>
                <p><strong>Image:</strong></p>
                <img
                  src={newProduct.img}
                  alt="Product"
                  style={{ width: '200px', height: '200px', objectFit: 'cover', marginBottom: '20px' }}
                />
                <p><strong>Description:</strong> {newProduct.description}</p>
              </div>
              <Button variant="outlined" color="primary" onClick={() => setIsSummaryStep(false)} style={{ marginRight: '10px', marginBottom:'10px'}}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleSubmitNewProduct}>
                Confirm
              </Button>
            </>
          )}
        </Box>
      </Modal>

      {/* Modal for Deleting Products */}
      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)} aria-labelledby="delete-products-modal" aria-describedby="delete-products-description">
        <Box className="d-modal-box">
          <h2 id="delete-products-modal">Delete Products</h2>
          <TableContainer component={Paper} className="modal-table-container">
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product._id}>
                    <TableCell>
                      <img
                        src={product.img}
                        alt={product.product_name}
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      />
                    </TableCell>
                    <TableCell>{product.product_name}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>
                      {/* Delete Button with Trash Icon */}
                      <IconButton color="secondary" onClick={() => handleDeleteClick(product)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="outlined" color="primary" onClick={() => setOpenDeleteModal(false)} style={{ marginTop: '10px' }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
