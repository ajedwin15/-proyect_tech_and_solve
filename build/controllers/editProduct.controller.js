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
exports.getEditListProduct = exports.putEditProduct = void 0;
//Model
const product_model_1 = __importDefault(require("../models/product.model"));
const putEditProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const editProduct = yield product_model_1.default.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.json(editProduct);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.putEditProduct = putEditProduct;
const getEditListProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const editProduct = yield product_model_1.default.findById({ _id: id }, { __v: false }, req.body);
        res.json(editProduct);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.getEditListProduct = getEditListProduct;
