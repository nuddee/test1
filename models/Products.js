import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
}, { collection: 'Products' }); // Explicitly refer to 'Admin' collection

const Products = mongoose.models.Products || mongoose.model("Products", productSchema);

export default Products;
