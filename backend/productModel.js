const productSchema = new Schema({
  name: {
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
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  images: [
    {
      url: String,
      altText: String,
    },
  ],
});
const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
