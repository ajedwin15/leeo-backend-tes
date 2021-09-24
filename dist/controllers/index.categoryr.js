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
exports.createbook = exports.getBookId = exports.getCategory = void 0;
const database_1 = require("../database");
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM  authors INNER JOIN books ON  authors.idauthor = books.idbook ");
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getCategory = getCategory;
const getBookId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const response = yield database_1.pool.query("select * from books where idbook = $1", [id]);
    return res.json(response.rows);
});
exports.getBookId = getBookId;
const createbook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { libro, precio } = req.body;
    const { autor } = req.body;
    const { categoria } = req.body;
    const responsebook = yield database_1.pool.query('INSERT INTO books (libro, precio) VALUES ($1, $2)', [libro, precio]);
    const responseAuthor = yield database_1.pool.query('INSERT INTO authors (autor) VALUES ($1)', [autor]);
    const responseCategory = yield database_1.pool.query('INSERT INTO categorias (categoria) VALUES ($1)', [categoria]);
    return res.json({
        message: 'libro creado',
        body: {
            book: {
                libro,
                autor,
                categoria,
                precio
            }
        }
    });
});
exports.createbook = createbook;
// export const updatebook = (req:Request, res: Response): Promise<Response> => {
// }
// export const daletebook = (req:Request, res: Response): Promise<Response> => {}
