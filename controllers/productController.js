const Products = require('../models/ProductModel');

class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filtering() {
        const queryObject = { ...this.queryString }   // QueryString = req.query
        // Before delete page

        const excludedFields = ['page', 'sort', 'limit'];
        excludedFields.forEach(el => delete (queryObject[el]));    // After delete page

        let queryStr = JSON.stringify(queryObject);

        // gte: greater than or equal
        // gt: greater than
        // lt: lesser than
        // lte: lesser than or equal
        // 
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match);

        this.query.find(JSON.parse(queryStr));
        return this;
    }

    sorting() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');

            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt');
        }

        return this;
    }

    paginating() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 3;
        const skip = (page - 1)* limit;

        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
}

const ProductController = {
    getProducts: async (req, res) => {
        try {
            const features = new APIFeatures(Products.find(), req.query)
                .filtering()
                .sorting();
            const products = await features.query;

            res.json({
                status: 'Success',
                result: products.length,
                products: products
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    createProducts: async (req, res) => {
        try {
            const { product_id, title, price, sale, image, category } = req.body;

            // Check image upload
            if (!image) {
                return res.status(400).json({ msg: "No image upload" });
            }

            const product = await Products.findOne({ product_id });
            if (product) {
                return res.status(400).json({ msg: "Product already exists" });
            }

            const newProduct = new Products({
                product_id, title, price, sale, image, category
            });

            await newProduct.save();

            res.json({ msg: "Created a product" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteProducts: async (req, res) => {
        try {
            await Products.findByIdAndDelete(req.params.id);
            res.json({ msg: "Deleted a product" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    updateProducts: async (req, res) => {
        try {
            const { product_id, title, price, sale, image, category } = req.body;

            if (!image) {
                return res.status(400).json({ msg: "No image upload" });
            }

            await Products.findByIdAndUpdate({ _id: req.params.id }, {
                product_id, title, price, sale, image, category
            });

            res.json({ msg: "Updated a product" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = ProductController;