"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deteleProduct = exports.getListProduct = exports.createProduct = void 0;
//Model
const product_model_1 = __importDefault(require("../models/product.model"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, price, category } = req.body;
        const newProduct = new product_model_1.default({ title, description, price, category });
        yield newProduct.save();
        res.json(newProduct);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.createProduct = createProduct;
const getListProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newListProduc = yield product_model_1.default.find({}, { __v: false });
        res.json(newListProduc);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getListProduct = getListProduct;
const deteleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield product_model_1.default.findByIdAndDelete(id);
        res.json({ "message": "Producto eliminado" });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deteleProduct = deteleProduct;
