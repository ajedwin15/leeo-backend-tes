import {Request, Response} from 'express'
import {QueryResult} from 'pg'

import {pool} from '../database'


 export const createbook = async (req:Request, res: Response): Promise<Response> => {
     const { libro, precio} = req.body;
     const { autor } = req.body;
     const { categoria } = req.body;
     const responsebook: QueryResult = await pool.query('INSERT INTO books (libro, precio) VALUES ($1, $2)', [libro, precio])
     const responseAuthor:QueryResult = await pool.query('INSERT INTO authors (autor) VALUES ($1)', [autor])
     const responseCategory:QueryResult = await pool.query('INSERT INTO categorias (categoria) VALUES ($1)', [categoria])
     
     return res.json({
         message : 'libro creado',
         body: {
             book: {
                 libro,
                 autor,
                 categoria,
                 precio
            }
        }
    })
    
 }