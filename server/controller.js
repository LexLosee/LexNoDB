'use strict';

let allProducts = require('./products.json'); //accessing products json file and assigning to a variable

//get request for getting all products
const getProducts = (req, res, next) => {
    
    if (allProducts) {
        res.json(allProducts)

    } else {
        res.json(allProducts);
    }
};
//create new product by pushing onto products array. Making request to the body sent from the client and responding with all products
const createProduct = (req, res, next) => {
    allProducts.push(req.body);
    res.json(allProducts);
};
//update product - id is whatever id is passed into params - 
const updateProduct = (req, res, next) => {
    let id = req.params.id
    console.log(req.body)
    let {product_name, price, img_url} =req.body;
    for (let i = 0; i < allProducts.length; i++) {
     
        if (allProducts[i].id == id) {
            allProducts[i].product_name = product_name;
            allProducts[i].price = price;
            allProducts[i].img_url = img_url;
            
        
        }
        else{null}
      }
    res.json(allProducts);
};
//delete id passed in and filter and return/respond array of products that do not equal the id passed in
const deleteProduct = (req, res, next) => {
    const { id } = req.params;
    let currentProducts = req.body
    let newProducts = currentProducts.filter(function (obj) {
        return obj.id != id;
    });
   
    res.json(newProducts);
};


module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};