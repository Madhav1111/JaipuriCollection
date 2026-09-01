const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
    },

    category: {
      type: String,
      required: true,
    },

    collection: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,

      required: true,

      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    originalPrice: {
      type: Number,
    },

    discount: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      default: 0,
    },

    images: [
      {
        type: String,
      },
    ],

    trending: {
      type: Boolean,
      default: false,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    bestSeller: {
      type: Boolean,
      default: false,
    },

    newArrival: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: true,
    },

    rating: {
      type: Number,
      default: 5,
    },

    reviews: {
      type: Number,
      default: 0,
    },
    productDetails: [
      {
        title: {
          type: String,
          required: true,
        },

        items: [
          {
            title: {
              type: String,
              required: true,
            },

            value: {
              type: String,
              default: "",
            },

            icon: {
              type: String,
              default: "",
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Product", productSchema);
