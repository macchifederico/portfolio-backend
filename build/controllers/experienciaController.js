"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Experiencia_1 = require("../models/Experiencia");
class ExperienciaController {
    async getExperienciaLaboral(req, res) {
        const { id_persona } = req.body;
        const expLaborales = await Experiencia_1.Experiencia.findAll({
            where: {
                id_persona: id_persona
            }
        });
        res.status(200).json({
            msg: 'Experiencia laboral obtenida correctamente',
            expLaborales: expLaborales
        });
    }
    async getUnaExpereriencia(req, res) {
        const { id_persona, id_experiencia } = req.body;
        const proyecto = await Experiencia_1.Experiencia.findOne({
            where: {
                id_persona: id_persona,
                id: id_experiencia
            }
        });
        res.status(200).json({
            msg: 'Proyecto obtenida correctamente',
            proyectos: proyecto
        });
    }
    async createExperienciaLaboral(req, res) {
        const { id_persona, empresa, cargo, fecha_inicio, fecha_fin, en_proceso } = req.body;
        if (!id_persona) {
            res.status(400).json({ msg: 'El id persona es obligatorio' });
        }
        else {
            const expLaborales = await Experiencia_1.Experiencia.create({
                id_persona: id_persona,
                empresa: empresa,
                cargo: cargo,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            });
            res.status(200).json({
                msg: 'Experiencia laboral creada correctamente',
                expLaborales: expLaborales
            });
        }
    }
    async updateExperienciaLaboral(req, res) {
        const { id_experiencia, id_persona, empresa, cargo, fecha_inicio, fecha_fin, en_proceso } = req.body;
        const expExistenteByIdPersona = await Experiencia_1.Experiencia.findOne({
            where: {
                id_persona: id_persona,
                id: id_experiencia
            }
        });
        if (!expExistenteByIdPersona) {
            res.status(400).json({ msg: 'No existe experiencia laboral con ese id' });
        }
        else {
            await Experiencia_1.Experiencia.update({
                empresa: empresa,
                cargo: cargo,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            }, {
                where: {
                    id_persona: id_persona,
                    id: id_experiencia
                }
            });
            res.status(200).json({ msg: 'Experiencia laboral actualizada correctamente' });
        }
    }
    async deleteExperienciaLaboral(req, res) {
        const { id_experiencia, id_persona } = req.body;
        const experienciaExistenteByIdPersona = await Experiencia_1.Experiencia.findOne({
            where: {
                id_persona: id_persona,
                id: id_experiencia
            }
        });
        if (!experienciaExistenteByIdPersona) {
            res.status(400).json({ msg: 'No existe experiencia laboral con ese id' });
        }
        else {
            await Experiencia_1.Experiencia.destroy({
                where: {
                    id_persona: id_persona,
                    id: id_experiencia
                }
            });
            res.status(200).json({ msg: 'Experiencia laboral eliminada correctamente' });
        }
    }
}
const experienciaController = new ExperienciaController();
exports.default = experienciaController;
