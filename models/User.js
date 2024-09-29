import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  collection: 'customer',  // Explicitly set collection name
});

// Prevent OverwriteModelError
export default mongoose.models.customer || mongoose.model('customer', CustomerSchema);
