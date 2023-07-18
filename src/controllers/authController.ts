import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

import { Persona } from "../models/Persona";

class AuthController {

    public async registro(req: Request, res: Response){
        // const {nombre, apellido, email, password} = req.body;
        // const newPersona = await Persona.create({
        //     nombre,
        //     apellido,
        //     email,
        //     password
        // });
        // const token = jwt.sign({_id: newPersona.id}, 'secretkey');
        // res.status(200).send({
        //     token,
        //     text: "Registro Exitoso"
        // });
        
    }


    public async login(req: Request, res: Response, next: any){
        const { email, password } = req.body;         
        
        if(!email || !password){
            res.status(500).send({
                text: "Es necesario usuario y password para loguearse"
            })
        }else{
            const result = await Persona.findOne({
                where: {
                    email: email,
                    password: password
            }
        });        
        
            if(result?.dataValues){                
                const token = jwt.sign({_id: result.dataValues.id}, process.env.SECRET_KEY!);                
                
                jwt.verify(token, process.env.SECRET_KEY!, (err, _user) => {
                    if(err){
                        res.status(500).send('Token denegado');
                    }else{                    
                        next();
                    }
                });
                res.status(200).send({
                    text: "Usuario logueado con exito",
                    token: token,
                    id: result.dataValues.id
                })
            }else{
                res.status(500).send({
                    text: "Usuario o password invalidos"
                })
            }
        }
    }
}

export const authController = new AuthController();
export default authController;

