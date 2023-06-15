import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

class TokenService {

    constructor(){

    }
    
    verifyToken(req: Request, res: Response, next: any){        
        
        if(!req.headers.authorization){
            return res.status(401).send('Request no autorizado');
        }

        const token = req.headers.authorization.split(' ')[1];

        if(token === 'null'){
                return res.status(401).send('Request no autorizado');
        }

        const payload = jwt.verify(token, process.env.SECRET_KEY!);
        
        req.userId = payload._id;
        next();
        }
    
}

export const tokenService = new TokenService();
export default tokenService;
