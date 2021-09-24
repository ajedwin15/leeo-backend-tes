import {Request, Response} from 'express'
import {QueryResult} from 'pg'

import {pool} from '../database'




 export const getSale = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult =  await pool.query("SELECT SUM(valor) FROM ventas");
        
        return res.status(200).json({'Total ventas': response.rows});
        
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server error')
        
    }
}
