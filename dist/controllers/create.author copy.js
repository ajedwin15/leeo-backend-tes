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
exports.getAuthor = exports.createAuthor = void 0;
const database_1 = require("../database");
const createAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { autor } = req.body;
    const responseAuthor = yield database_1.pool.query('INSERT INTO authors (autor) VALUES ($1)', [autor]);
    return res.json({
        message: 'autor creado',
        body: {
            author: {
                autor,
            }
        }
    });
});
exports.createAuthor = createAuthor;
const getAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM  authors");
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getAuthor = getAuthor;
