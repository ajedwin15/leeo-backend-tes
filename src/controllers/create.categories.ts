import {Request, Response} from 'express'
import {QueryResult} from 'pg'

import {pool} from '../database'




 export const createCategories = async (req:Request, res: Response): Promise<Response> => {
     const { categoria } = req.body;
     const responseAuthor:QueryResult = await pool.query('INSERT INTO categorias (categoria) VALUES ($1)', [categoria])
     
     return res.json({
         message : 'categoria creada',
         body: {
             author: {
                 categoria,
            }
        }
    })
    
 }

 export const getCategories = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult =  await pool.query("SELECT * FROM  categorias");
        
        return res.status(200).json(response.rows);
        
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server error')
        
    }
}
