const Products = require('../models/ProductModel');

const ProductController = {
    getProducts: async(req, res) =>{
        try {
            const products = await Products.find();

            res.json(products);
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    createProducts: async(req, res) =>{
        try {
            const {product_id, title, price, sale, image, category} = req.body;
            
            // Check image upload
            if(!image){
                return res.status(400).json({msg: "No image upload"});
            }

            const product = await Products.findOne({product_id});
            if(product){
                return res.status(400).json({msg: "Product already exists"});
            }

            const newProduct = new Products({
                product_id, title, price, sale, image, category
            });

            await newProduct.save();

            res.json({msg: "Created a product"});
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    deleteProducts: async(req, res) =>{
        try {
            await Products.findByIdAndDelete(req.params.id);
            res.json({msg: "Deleted a product"});
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    updateProducts: async(req, res) =>{
        try {
            const {product_id, title, price, sale, image, category} = req.body;

            if(!image){
                return res.status(400).json({msg: "No image upload"});
            }

            await Products.findByIdAndUpdate({_id: req.params.id},{
                product_id, title, price, sale, image, category
            });

            res.json({msg: "Updated a product"});
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    }
}

module.exports = ProductController;