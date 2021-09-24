import {Request, Response} from 'express'
import {QueryResult} from 'pg'

import {pool} from '../database'


 export const registerSale = async (req:Request, res: Response): Promise<Response> => {
     const {bookid ,libro, valor} = req.body;
     
     const responseVenta: QueryResult = await pool.query('INSERT INTO ventas (bookid,libro, valor) VALUES ($1, $2, $3)', [bookid,libro, valor])
     
     
     return res.json({
         message : 'venta realizada',
         body: {
             book: {
                 bookid,
                 libro,
                 valor

            }
        }
    })
    
 }