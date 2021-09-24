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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSale = void 0;
const database_1 = require("../database");
const registerSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookid, libro, valor } = req.body;
    const responseVenta = yield database_1.pool.query('INSERT INTO ventas (bookid,libro, valor) VALUES ($1, $2, $3)', [bookid, libro, valor]);
    return res.json({
        message: 'venta realizada',
        body: {
            book: {
                bookid,
                libro,
                valor
            }
        }
    });
});
exports.registerSale = registerSale;
