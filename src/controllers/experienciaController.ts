import { Request, Response } from 'express';
import { Experiencia } from '../models/Experiencia';

class ExperienciaController{

    public async getExperienciaLaboral(req: Request, res: Response){
        const {id_persona} = req.body;

        const expLaborales = await Experiencia.findAll({
            where:{
                id_persona: id_persona
            }
        })

        res.status(200).json({
            msg: 'Experiencia laboral obtenida correctamente',
            expLaborales: expLaborales
        })
    }

    public async getUnaExpereriencia(req: Request, res: Response){
        const {id_persona, id_experiencia} = req.body;

        const proyecto = await Experiencia.findOne({
            where:{
                id_persona: id_persona,
                id: id_experiencia
            }
        })
        res.status(200).json({
            msg: 'Proyecto obtenida correctamente',
            proyectos: proyecto
        })
    }

    public async createExperienciaLaboral(req: Request, res: Response){
        const {id_persona, empresa, cargo, fecha_inicio, fecha_fin, en_proceso} = req.body;

        if(!id_persona){
            res.status(400).json({msg: 'El id persona es obligatorio'})
        }else{
            const expLaborales = await Experiencia.create({
                id_persona: id_persona,
                empresa: empresa,
                cargo: cargo,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            })
            res.status(200).json({
                msg: 'Experiencia laboral creada correctamente',
                expLaborales: expLaborales
            })
        }
    }
    

    public async updateExperienciaLaboral(req: Request, res: Response){
        const {id_experiencia, id_persona, empresa, cargo, fecha_inicio, fecha_fin,  en_proceso} = req.body;

        const expExistenteByIdPersona = await Experiencia.findOne({
            where:{
                id_persona: id_persona,
                id: id_experiencia
            }
        })

        if(!expExistenteByIdPersona){
            res.status(400).json({msg: 'No existe experiencia laboral con ese id'})
        }else{
            await Experiencia.update({
                empresa: empresa,
                cargo: cargo,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            },{
                where: {
                    id_persona: id_persona,
                    id: id_experiencia
                }
            })
            res.status(200).json({msg: 'Experiencia laboral actualizada correctamente'})
        }
    }

    public async deleteExperienciaLaboral(req: Request, res: Response){
        const {id_experiencia, id_persona} = req.body;

        const experienciaExistenteByIdPersona = await Experiencia.findOne({
            where:{
                id_persona: id_persona,
                id: id_experiencia
            }
        })

        if(!experienciaExistenteByIdPersona){
            res.status(400).json({msg: 'No existe experiencia laboral con ese id'})
        }else{
            await Experiencia.destroy({
                where: {
                    id_persona: id_persona,
                    id: id_experiencia
                }
            })
            res.status(200).json({msg: 'Experiencia laboral eliminada correctamente'})
        
        }
    }    
}

const experienciaController = new ExperienciaController();
export default experienciaController;