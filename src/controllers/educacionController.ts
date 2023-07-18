import {Request, Response} from 'express';
import { Educacion } from '../models/Educacion';

class EducacionController{

    constructor(){

    }

    public async getAllEducacionPersona(req: Request, res: Response){
        const id_persona = req.userId;
                
        const educaciones = await Educacion.findAll({
            where: {
                id_persona : id_persona
            }
        })

        if(educaciones.length  === 0){
            return res.status(400).json({msg: 'No existen educaciones para esta persona'})
        }else{
            return res.status(200).json({
                text: 'Educacion obtenida',
                educaciones: educaciones
            })
        }
    }

    public async getUnaEducacion(req: Request, res: Response){
        const id_persona = req.userId;
        const id_educacion = req.params.id;
        
        const educacion = await Educacion.findOne({
            where:{
                id_persona: id_persona,
                id: id_educacion
            }
        })
        res.status(200).json({
            msg: 'Educacion obtenida correctamente',
            educacion: educacion
        })
    }

    public async createEducacion(req: Request, res: Response){
        const id_persona = req.userId;
        const {titulo, institucion, fecha_inicio, fecha_fin, en_proceso} = req.body;
        
        if(!req.body){
            return res.status(400).json({msg: 'No existe la persona en nuestra base'})
        }else{
            await Educacion.create({
                id_persona: id_persona,
                titulo: titulo,
                institucion: institucion,
                fecha_inicio: Date.parse(fecha_inicio),
                fecha_fin: Date.parse(fecha_fin),
                en_proceso: en_proceso
            }) 

            res.status(200).json({
                msg: 'Educacion creada exitosamente'
            })
        }
    }

    public async updateEducacion(req: Request, res: Response){
        const id_persona = req.userId;
        const {id, titulo, institucion, fecha_inicio, fecha_fin, en_proceso} = req.body;

        const educacion_actualizar = await Educacion.findOne({
            where: {
                id_persona: id_persona,
                id: id 
            }
        })

        if(!educacion_actualizar){
            return res.status(400).json({msg: 'No existe en nuestra base, no se pudo actualizar'})
        }else{
            await Educacion.update({
                titulo: titulo,
                institucion: institucion,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            },{
                where: {
                    id_persona: id_persona,
                    id: id
                }
            }) 

            res.status(200).json({
                msg: 'Educacion actualizada exitosamente'
            })
        }
    }

    public async deleteEducacion(req: Request, res: Response){
        const id_persona = req.userId;
        const {id} = req.params;
        
        if(!req.body){
            res.status(400).json({text: 'No se pudo realizar la operación'});
        }else{
            try{
                await Educacion.destroy({
                    where: {
                        id_persona: id_persona,
                        id: id
                    }
                })
                    res.status(200).json({
                        text: 'Educacion eliminada'
                    
                    })
               }catch(error){
                res.status(400).json({
                    msg: error
                })
               }
        }
    } 
}

export const educacion = new EducacionController();
export default educacion;