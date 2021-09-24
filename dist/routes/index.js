"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const search_author_1 = require("../controllers/search.author");
const search_category_1 = require("../controllers/search.category");
const create_books_1 = require("../controllers/create.books");
const create_author_1 = require("../controllers/create.author");
const create_categories_1 = require("../controllers/create.categories");
const registrar_venta_1 = require("../controllers/registrar.venta");
const query_consul_1 = require("../controllers/query.consul");
/**
 *@swagger
 * components:
 *   schemas:
 *     Book:
 *      type: object
 *      properties:
 *          id:
 *            type: integer
 *          libro:
 *            type: string
 *            sescription: registra un libro nuevo
 *          autor:
 *            type: string
 *            description: registra el autor del libro
 *          categoria:
 *            type: string
 *            description: registra la categoria del libro
 *          precio:
 *            type: number
 *            description: registra el valor de venta del libro
 *      required:
 *           - libro
 *           - autor
 *           - categoria
 *           - precio
 *      example:
 *           libro: It
 *           autor: Stephen
 *           categoria: Terror
 *           precio: 4.5
 */
/**
 *@swagger
 * components:
 *   schemas:
 *     Sale:
 *      type: object
 *      properties:
 *          id:
 *            type: integer
 *          bookid:
 *            type: integer
 *          libro:
 *            type: string
 *            sescription: registra un libro nuevo
 *          valor:
 *            type: number
 *            description: registra el valor pagado del libro
 *      required:
 *           - bookid
 *           - libro
 *           - valor
 *      example:
 *           bookid: 1
 *           libro: It
 *           valor: 4.5
 */
/**
*@swagger
* components:
*   schemas:
*     Author:
*      type: object
*      properties:
*          id:
*            type: integer
*          autor:
*            type: string
*            description: registra el autor del libro
*      required:
*           - autor
*      example:
*           autor: pablo
*/
/**
*@swagger
* components:
*   schemas:
*     Category:
*      type: object
*      properties:
*          id:
*            type: integer
*          autor:
*            type: string
*            description: Registrar una categoria de libros
*      required:
*           - categoria
*      example:
*           categoria: Terror
*/
/**
 * @swagger
 * tags:
 *   name: Libros
 *   description: Creacion y busqueda de libros de forma general
*/
/**
 * @swagger
 * tags:
 *   name: Autor
 *   description: Creacion y busqueda por autor
*/
/**
  * @swagger
  * tags:
  *   name: Categoria
  *   description: Creacion y busqueda por categorias
 */
/**
  * @swagger
  * tags:
  *   name: Search Por Autor o Categoria
  *   description: Busqueda por autor o categorias
 */
/**
  * @swagger
  * tags:
  *   name: Registro De venta
  *   description: Registro de ventas de libros
 */
/**
* @swagger
*   /books:
*    post:
*       summary: Registar libro con autor y categoría
*       tags: [Libros]
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                      $ref: '#/components/schemas/Book'
*       responses:
*           200:
*             description: Libro registrado con exito
*             content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Book'
*/
//Registar libro con autor y categoría  
router.post('/books', create_books_1.createbook);
// llamar un autor
/**
* @swagger
*   /author:
*    get:
*       summary: Llamar un autor
*       tags: [Autor]
*       responses:
*           200:
*             description: Trae los autores de la BD
*             content:
*                  application/json:
*                     schema:
*                       type: array
*                       example:
*                           idauthor: 1
*                           autor: homero
*/
router.get('/author', create_author_1.getAuthor);
// Registrar un autor
/**
* @swagger
*   /author:
*    post:
*       summary: Registar autor
*       tags: [Autor]
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                      $ref: '#/components/schemas/Author'
*       responses:
*           200:
*             description: Autor registrado con exito
*             content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Author'
*/
router.post('/author', create_author_1.createAuthor);
// Llamar categorias
/**
* @swagger
*   /category:
*    get:
*       summary: Llamar una categoria
*       tags: [Categoria]
*       responses:
*           200:
*             description: Trae las categorias de la BD
*             content:
*                  application/json:
*                     schema:
*                       type: array
*                       example:
*                           idcategory: 1
*                           Categoria: Terror
*/
router.get('/category', create_categories_1.getCategories);
// Registrar una categoria
/**
* @swagger
*   /category:
*    post:
*       summary: Registar Una categoria
*       tags: [Categoria]
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                      $ref: '#/components/schemas/Category'
*       responses:
*           200:
*             description: Categoria creada con exito
*             content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Category'
*/
router.post('/category', create_categories_1.createCategories);
//consultar libros por autor
/**
* @swagger
*   /search/author:
*    get:
*       summary: Consultar libros por Autor
*       tags: [Search Por Autor o Categoria]
*       responses:
*           200:
*             description: Trae los libros por autor de la BD
*             content:
*                  application/json:
*                     schema:
*                       type: array
*                       example:
*                           idcategory: 7
*                           categoria: Terror
*                           idbook: 7
*                           libro: It
*/
router.get('/search/author', search_author_1.getBookAuthor);
/**
* @swagger
*   /search/author:
*    get:
*       summary: Consultar libros por Autor
*       tags: [Search Por Autor o Categoria]
*       responses:
*           200:
*             description: Trae los libros por autor de la BD
*             content:
*                  application/json:
*                     schema:
*                       type: array
*                       example:
*                           idauthor: 7
*                           autor: stephen
*                           idbook: 7
*                           libro: It
*                           precio: 4.50
*/
//consultar libros por categoria
/**
* @swagger
*   /search/category:
*    get:
*       summary: Consultar libros por Categoria
*       tags: [Search Por Autor o Categoria]
*       responses:
*           200:
*             description: Trae los libros por categoria de la BD
*             content:
*                  application/json:
*                     schema:
*                       type: array
*                       example:
*                           idcategory: 7
*                           categoria: Terror
*                           idbook: 7
*                           libro: It
*                           precio: 4.50
*/
router.get('/search/category', search_category_1.getBookCategory);
//Registrar una venta
/**
* @swagger
*   /sale:
*    post:
*       summary: Registar la venta realizada
*       tags: [Registro De venta]
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                      $ref: '#/components/schemas/Sale'
*       responses:
*           200:
*             description: Venta realizada con exito
*             content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Sale'
*/
router.post('/sale', registrar_venta_1.registerSale);
//Consultar total vendido
/**
* @swagger
*   /sale/total:
*    get:
*       summary: Total de las ventas
*       tags: [Registro De venta]
*       responses:
*           200:
*             description: Consulta el Total de libros vendidos
*             content:
*                  application/json:
*                     schema:
*                       type: array
*                       example:
*                           Total: 7
*
*/
router.get('/sale/total', query_consul_1.getSale);
exports.default = router;
