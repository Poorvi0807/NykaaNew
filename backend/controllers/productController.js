const productModel = require('../models/productModel');

const getAllProducts = async (req, res) => {
    try {
        const product = await productModel.find()
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

const getSingleProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productModel.findById({ _id: id })
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

const addSingleProduct = async (req, res) => {
    const { name, picture, description, gender, category, price } = req.body;
    if (!name || !picture || !description || !gender || !category || !price) {
        return res.status(400).json({ message: 'Missing required fields.Check it' })
    }
    try {
        const product = await productModel.create({ name, picture, description, gender, category, price })
        return res.status(201).json(product)
    } catch (error) {
        console.log('Error while the adding product:', error);
        return res.status(500).json({ error: 'Internal server error' })
    }
}


const updateProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await productModel.findByIdAndUpdate({ _id: id }, { ...req.body, "updated_at": Date.now() }, {new: true })
        console.log(product)
        return res.status(204).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error.check it' });
    }
}

const deleteProduct = async (req, res) => {
    const { userId } = req.body;
    const { id } = req.params;
    try {
        const product = await productModel.findByIdAndDelete({ _id: id })
        console.log(product)
        return res.status(202).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error.check it' });
    }
}

module.exports = { getAllProducts, getSingleProduct, addSingleProduct, updateProduct, deleteProduct }