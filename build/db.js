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
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const MONGO_HOST_URI = process.env.MONGO_HOST;
        const MONGO_PORT_URI = process.env.MONGO_PORT;
        const MONGO_DB_URI = process.env.MONGO_DB;
        const mongoUri = `mongodb://${MONGO_HOST_URI}:${MONGO_PORT_URI}/${MONGO_DB_URI}`;
        try {
            yield mongoose_1.default.connect(mongoUri, {
                useNewUrlParser: true,
            });
            console.log('connected to mongodb');
        }
        catch (error) {
            console.log(error, 'I am not connected to mongodb');
        }
    });
}
exports.default = connect;
