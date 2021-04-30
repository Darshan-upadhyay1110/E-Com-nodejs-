const express = require('express');

// const path = require('path');

// const roootPathDir = require('../util/path');

const adminController = require('../controller/admin')
const { body } = require('express-validator/check');

const isAuth = require('../Middleware/is-auth');

const router = express.Router();


// /admin/add-products =>GET
router.get('/add-product',isAuth,adminController.getAddproduct);
// /admin/products =>GET
router.get('/products',isAuth,adminController.getProducts);
// /admin/add-products =>POST
router.post(
    '/add-product',
    [
      body('title')
        .isString()
        .isLength({ min: 3 })
        .trim(),
      body('price').isFloat(),
      body('description')
        .isLength({ min: 5, max: 400 })
        .trim()
    ],
    isAuth,
    adminController.postAddProduct
  );
// /admin.edit-products => get
router.get('/edit-product/:productId',isAuth,adminController.getEditproduct);
// /admin.edit-products => post
router.post(
    '/edit-product',
    [
      body('title')
        .isString()
        .isLength({ min: 3 })
        .trim(),
      body('price').isFloat(),
      body('description')
        .isLength({ min: 5, max: 400 })
        .trim()
    ],
    isAuth,
    adminController.postEditProduct
  );
  

router.delete('/product/:productId',isAuth,adminController.deleteProduct);


module.exports = router
