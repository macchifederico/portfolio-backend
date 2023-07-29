import { Request, Response } from 'express';
import { Experiencia } from '../models/Experiencia';

class ExperienciaController{

    public async getExperienciaLaboral(req: Request, res: Response){
        const id_persona = req.userId;
           
        const expLaborales = await Experiencia.findAll({
            where:{
                id_persona: id_persona
            }
        })

        res.status(200).json({
            text: 'Experiencia laboral obtenida correctamente',
            expLaborales: expLaborales
        })
    }

    public async getUnaExpereriencia(req: Request, res: Response){
        const id_persona = req.userId;
        const id_experiencia = req.params.id;        
        
        const experiencia = await Experiencia.findOne({
            where:{
                id_persona: id_persona,
                id: id_experiencia
            }
        })
        res.status(200).json({
            text: 'Experiencia laboral obtenida correctamente',
            experiencia: experiencia
        })
    }

    public async createExperienciaLaboral(req: Request, res: Response){
        const id_persona = req.userId;
        const {nombreE, empresaE, descripcionE} = req.body;

        if(!id_persona){
            res.status(400).json({text: 'El id persona es obligatorio'})
        }else{
            const expLaborales = await Experiencia.create({
                id_persona: id_persona,
                nombreE: nombreE,
                empresaE: empresaE,
                descripcionE: descripcionE
            })
            res.status(200).json({
                text: 'Experiencia laboral creada correctamente',
                expLaborales: expLaborales
            })
        }
    }
    

    public async updateExperienciaLaboral(req: Request, res: Response){        
        const {id, id_persona, empresaE, nombreE, descripcionE, en_proceso, fecha_inicio, fecha_fin } = req.body;
        
        const expExistenteByIdPersona = await Experiencia.findOne({
            where:{
                id_persona: id_persona,
                id: id
            }
        })
        
        if(!expExistenteByIdPersona){
            res.status(400).json({text: 'No existe experiencia laboral con ese id'})
        }else{
            await Experiencia.update({
                empresa: empresaE,
                nombreE: nombreE,
                empresaE: empresaE,
                descripcionE: descripcionE,
                en_proceso: en_proceso,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                
            },{
                where: {
                    id_persona: id_persona,
                    id: id
                }
            })
            res.status(200).json({text: 'Experiencia laboral actualizada correctamente'})
        }
    }

    public async deleteExperienciaLaboral(req: Request, res: Response){
        const id_persona = req.userId;
        const id_experiencia = req.params.id;
        
        console.log(id_persona, id_experiencia);
            
        const experienciaExistenteByIdPersona = await Experiencia.findOne({
            where:{
                id_persona: id_persona,
                id: id_experiencia
            }
        })

        if(!experienciaExistenteByIdPersona){
            res.status(400).json({text: 'No existe experiencia laboral con ese id'})
        }else{
            await Experiencia.destroy({
                where: {
                    id_persona: id_persona,
                    id: id_experiencia
                }
            })
            res.status(200).json({text: 'Experiencia laboral eliminada correctamente'})
        
        }
    }    
}

const experienciaController = new ExperienciaController();
export default experienciaController;