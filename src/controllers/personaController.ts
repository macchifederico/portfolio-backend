import { Request, Response } from "express";
import { Persona } from "../models/Persona";

class PersonaController {

    public async obtenerPersona(req: Request, res: Response) {
        const {id_persona} = req.body;

        if(!id_persona){
            return res.status(400).json({text: 'No existe la persona en nuestra base'})
        }else{
            const persona = await Persona.findOne({
                where: {
                    id_persona : id_persona
                }
            })
            return res.status(200).json({
                text: 'Persona obtenida',
                persona: persona
            })
        }
    }

    public async crearPersona(req: Request, res: Response) {
        const {nombre, apellido, img, ocupacion, urlLinkedin, urlGithub, email, password} = req.body;

        if(!req.body){
            return res.status(400).json({text: 'No existe la persona en nuestra base'})
        }else{
            await Persona.create({
                nombre: nombre,
                apellido: apellido,
                img: img,
                ocupacion: ocupacion,
                urlLinkedin: urlLinkedin,
                urlGithub: urlGithub,
                email: email,
                password: password
            }) 

            res.status(200).json({
                text: 'Persona creada exitosamente'
            })
        }
    }

    public async updatePersona(req: Request, res: Response) {
        //ver como pasarle el objeto entero
        const {id_persona, nombre, apellido, img, ocupacion, urlLinkedin, urlGithub, email, password} = req.body;

        const persona = await Persona.findOne({
            where: {
                id: id_persona
            }
        })

        if(!persona){
            return res.status(400).json({text: 'No existe en nuestra base, no se pudo actualizar'})
        }else{
            await Persona.update({
                nombre: nombre,
                apellido: apellido,
                img: img,
                ocupacion: ocupacion,
                urlLinkedin: urlLinkedin,
                urlGithub: urlGithub,
                email: email,
                password: password
            },{
                where: {
                    id: id_persona
                }
            }) 

            res.status(200).json({
                text: 'Persona actualizada exitosamente'
            })
        }
    }

    public async deletePersona(req: Request, res: Response) {
        const {id_persona} = req.body;
        
        if(!req.body){
            res.status(400).json({text: 'No se pudo realizar la operación'});
        }else{
            try{
                await Persona.destroy({
                    where: {
                        id: id_persona
                    }
                })
                    res.status(200).json({
                        text: 'Persona eliminada'
                    })
               }catch(error){
                res.status(400).json({
                    text: error
                })
               }
        }
    } 
}

const personaController = new PersonaController();
export default personaController;