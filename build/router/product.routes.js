"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const editProduct_controller_1 = require("../controllers/editProduct.controller");
const filterProduct_controller_1 = require("../controllers/filterProduct.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: auto generad id of product
 *        title:
 *          type: string
 *          description: the name of the product
 *        description:
 *          type: string
 *          description: the description of the product
 *        price:
 *          type: integer
 *          description: the price of the product
 *        category:
 *          type: string
 *          description: the category of the product
 *      required:
 *        - title
 *        - description
 *        - price
 *        - category
 *      example:
 *        title: lg Smart tv
 *        description: 50 pul
 *        price: 3250
 *        category: tv
 *    ProductDelete:
 *       type: object
 *       properties:
 *         massage:
 *           type: string
 *           description: a massage the create product
 *       example: Producto eliminado
 *  parameters:
 *    productId:
 *       in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: the product id
 *    productFilter:
 *       in: query
 *       name: filterProduct
 *       required: true
 *       schema:
 *          type: string
 *       description: filter the product
 */
/**
 * @swagger
 * tags:
 *   name: [Products]
 *   description: Products endpoint
 */
/**
 * @swagger
 * tags:
 *   name: [Edit]
 *   description: list or edit the product
 */
/**
 * @swagger
 * tags:
 *   name: [Filter]
 *   descritption: filter products by title or category
 */
/**
 * @swagger
 * /product:
 *   get:
 *    summary: Retur a Product list
 *    tags: [Products]
 *    responses:
 *       200:
 *         description: the list of product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *
*/
router.get('/product', product_controller_1.getListProduct);
/**
 * @swagger
 * /product:
 *   post:
 *     summary: create a new products
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *               $ref: '#/components/schemas/Product'
 *     responses:
 *        200:
 *          description: the product succesfully create
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/Product'
 *        500:
 *           descrption: some server error
 */
router.post('/product', product_controller_1.createProduct);
/**
 * @swagger
 *  /product/{id}:
 *   delete:
 *      summary: get a product by id
 *      tags: [Products]
 *      parameters:
 *         - $ref: '#/components/parameters/productId'
 *      responses:
 *         200:
 *           descriptions: the product was found
 *           content:
 *              application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/Product'
 *         500:
 *           descrption: some server error
 */
router.delete('/product/:id', product_controller_1.deteleProduct);
/**
 * @swagger
 *  /product/edit/{id}:
 *   get:
 *      summary: get a product by id
 *      tags: [Edit]
 *      parameters:
 *         - $ref: '#/components/parameters/productId'
 *      responses:
 *         200:
 *           descriptions: the product was found
 *           content:
 *              application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/ProductDelete'
 *         500:
 *           descrption: some server error
 */
router.get('/product/edit/:id', editProduct_controller_1.getEditListProduct);
/**
 * @swagger
 *  /product/edit/{id}:
 *   put:
 *      summary: get a product by id
 *      tags: [Edit]
 *      parameters:
 *         - $ref: '#/components/parameters/productId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *      responses:
 *         200:
 *           descriptions: the product was found
 *           content:
 *              application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/Product'
 *         500:
 *           descrption: some server error
 */
router.put('/product/edit/:id', editProduct_controller_1.putEditProduct);
/**
 * @swagger
 *  /product/filter:
 *   get:
 *      summary: get a product by id
 *      tags: [Filter]
 *      parameters:
 *         - $ref: '#/components/parameters/productFilter'
 *      responses:
 *         200:
 *           descriptions: the product was found
 *           content:
 *              application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/Product'
 *         500:
 *           descrption: some server error
 */
router.get('/product/filter', filterProduct_controller_1.getfilterProduct);
exports.default = router;
