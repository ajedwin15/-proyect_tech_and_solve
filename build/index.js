"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./db"));
(0, db_1.default)();
app_1.default.listen(app_1.default.get('port'), () => {
    console.log('Server listening on por', app_1.default.get('port'));
});
