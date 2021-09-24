"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
var search_author_1 = require("../controllers/search.author");
var search_category_1 = require("../controllers/search.category");
var create_books_1 = require("../controllers/create.books");
var create_author_1 = require("../controllers/create.author");
var create_categories_1 = require("../controllers/create.categories");
var registrar_venta_1 = require("../controllers/registrar.venta");
var query_consul_1 = require("../controllers/query.consul");
//Registar libro con autor y categoría  
router.post('/books', create_books_1.createbook);
// Registrar un autor
router.get('/author', create_author_1.getAuthor);
router.post('/author', create_author_1.createAuthor);
// Registrar un autor
router.get('/category', create_categories_1.getCategories);
router.post('/category', create_categories_1.createCategories);
//consultar libros por autor
router.get('/search/author', search_author_1.getBookAuthor);
//consultar libros por categoria
router.get('/search/category', search_category_1.getBookCategory);
//Registrar una venta
router.post('/sale', registrar_venta_1.registerSale);
//Consultar total vendido
router.get('/sale/total', query_consul_1.getSale);
exports["default"] = router;
