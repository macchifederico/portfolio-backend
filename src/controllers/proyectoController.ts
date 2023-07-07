import { Request, Response } from 'express';
import { Proyecto } from '../models/Proyecto';

class ProyectoController{

    public async obtenerProyectos(req: Request, res: Response){
        const {id_persona} = req.body;

        const proyectos = await Proyecto.findAll({
            where:{
                id_persona: id_persona
            }
        })

        res.status(200).json({
            msg: 'Proyecto obtenida correctamente',
            proyectos: proyectos
        })
    }

    public async getUnProyecto(req: Request, res: Response){
        const {id_persona, id_proyecto} = req.body;

        const proyecto = await Proyecto.findOne({
            where:{
                id_persona: id_persona,
                id: id_proyecto
            }
        })

        res.status(200).json({
            msg: 'Proyecto obtenida correctamente',
            proyectos: proyecto
        })
    }

    public async crearProyecto(req: Request, res: Response){
        const {id_persona, empresa, cargo, fecha_inicio, fecha_fin, en_proceso} = req.body;

        if(!id_persona){
            res.status(400).json({msg: 'El id persona es obligatorio'})
        }else{
            const proyecto = await Proyecto.create({
                id_persona: id_persona,
                empresa: empresa,
                cargo: cargo,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            })
            res.status(200).json({
                msg: 'Proyecto creada correctamente',
                proyecto: proyecto
            })
        }
    }

    public async actualizarProyecto(req: Request, res: Response){
        const {id_proyecto, id_persona, empresa, cargo, fecha_inicio, fecha_fin,  en_proceso} = req.body;

        const proyectoByIdPersona = await Proyecto.findOne({
            where:{
                id_persona: id_persona,
                id: id_proyecto
            }
        })

        if(!proyectoByIdPersona){
            res.status(400).json({msg: 'No existe experiencia laboral con ese id'})
        }else{
            await Proyecto.update({
                empresa: empresa,
                cargo: cargo,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            },{
                where: {
                    id_persona: id_persona,
                    id: id_proyecto
                }
            })
            res.status(200).json({msg: 'Proyecto laboral actualizada correctamente'})
        }
    }

    public async deleteProyecto(req: Request, res: Response){
        const {id_proyecto, id_persona} = req.body;

        const proyectoByIdPersona = await Proyecto.findOne({
            where:{
                id_persona: id_persona,
                id: id_proyecto
            }
        })

        if(!proyectoByIdPersona){
            res.status(400).json({msg: 'No existe proyecto con ese id'})
        }else{
            await Proyecto.destroy({
                where: {
                    id_persona: id_persona,
                    id: id_proyecto
                }
            })
            res.status(200).json({msg: 'Proyecto laboral eliminada correctamente'})
        }
    }
    

}

const proyectoController = new ProyectoController();
export default proyectoController;