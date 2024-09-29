import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category_id: {
    type: Number,
    required: true
  },
  category_name: {
    type: String,
    required: true
  },
  description: String
}, { collection: 'categories' });

const Category = mongoose.models.Category || mongoose.model("categories", categorySchema);

export default Category;
