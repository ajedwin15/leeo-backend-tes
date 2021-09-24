import {Router} from 'express'
const router = Router();

import { getBookAuthor } from '../controllers/search.author';
import { getBookCategory } from '../controllers/search.category';
import {createbook } from '../controllers/create.books';
import { createAuthor, getAuthor } from '../controllers/create.author';
import { getCategories, createCategories } from '../controllers/create.categories';
import { registerSale } from '../controllers/registrar.venta';
import { getSale } from '../controllers/query.consul';

//Registar libro con autor y categoría  
router.post('/books', createbook)
// Registrar un autor
router.get('/author', getAuthor)
router.post('/author', createAuthor)
// Registrar un autor
router.get('/category', getCategories)
router.post('/category', createCategories)
//consultar libros por autor
router.get('/search/author', getBookAuthor)
//consultar libros por categoria
router.get('/search/category', getBookCategory)
//Registrar una venta
router.post('/sale', registerSale)
//Consultar total vendido
router.get('/sale/total', getSale)


export default router;
