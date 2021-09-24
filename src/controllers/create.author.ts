import {Request, Response} from 'express'
import {QueryResult} from 'pg'

import {pool} from '../database'




 export const createAuthor = async (req:Request, res: Response): Promise<Response> => {
     const { autor } = req.body;
     const responseAuthor:QueryResult = await pool.query('INSERT INTO authors (autor) VALUES ($1)', [autor])
     
     return res.json({
         message : 'autor creado',
         body: {
             author: {
                 autor,
            }
        }
    })
    
 }

 export const getAuthor = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult =  await pool.query("SELECT * FROM  authors");
        
        return res.status(200).json(response.rows);
        
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server error')
        
    }
}
