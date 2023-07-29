"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Experiencia_1 = require("../models/Experiencia");
class ExperienciaController {
    async getExperienciaLaboral(req, res) {
        const id_persona = req.userId;
        const expLaborales = await Experiencia_1.Experiencia.findAll({
            where: {
                id_persona: id_persona
            }
        });
        res.status(200).json({
            text: 'Experiencia laboral obtenida correctamente',
            expLaborales: expLaborales
        });
    }
    async getUnaExpereriencia(req, res) {
        const id_persona = req.userId;
        const id_experiencia = req.params.id;
        const experiencia = await Experiencia_1.Experiencia.findOne({
            where: {
                id_persona: id_persona,
                id: id_experiencia
            }
        });
        res.status(200).json({
            text: 'Experiencia laboral obtenida correctamente',
            experiencia: experiencia
        });
    }
    async createExperienciaLaboral(req, res) {
        const id_persona = req.userId;
        const { nombreE, empresaE, descripcionE } = req.body;
        if (!id_persona) {
            res.status(400).json({ text: 'El id persona es obligatorio' });
        }
        else {
            const expLaborales = await Experiencia_1.Experiencia.create({
                id_persona: id_persona,
                nombreE: nombreE,
                empresaE: empresaE,
                descripcionE: descripcionE
            });
            res.status(200).json({
                text: 'Experiencia laboral creada correctamente',
                expLaborales: expLaborales
            });
        }
    }
    async updateExperienciaLaboral(req, res) {
        const { id, id_persona, empresaE, nombreE, descripcionE, en_proceso, fecha_inicio, fecha_fin } = req.body;
        const expExistenteByIdPersona = await Experiencia_1.Experiencia.findOne({
            where: {
                id_persona: id_persona,
                id: id
            }
        });
        if (!expExistenteByIdPersona) {
            res.status(400).json({ text: 'No existe experiencia laboral con ese id' });
        }
        else {
            await Experiencia_1.Experiencia.update({
                empresa: empresaE,
                nombreE: nombreE,
                empresaE: empresaE,
                descripcionE: descripcionE,
                en_proceso: en_proceso,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
            }, {
                where: {
                    id_persona: id_persona,
                    id: id
                }
            });
            res.status(200).json({ text: 'Experiencia laboral actualizada correctamente' });
        }
    }
    async deleteExperienciaLaboral(req, res) {
        const id_persona = req.userId;
        const id_experiencia = req.params.id;
        console.log(id_persona, id_experiencia);
        const experienciaExistenteByIdPersona = await Experiencia_1.Experiencia.findOne({
            where: {
                id_persona: id_persona,
                id: id_experiencia
            }
        });
        if (!experienciaExistenteByIdPersona) {
            res.status(400).json({ text: 'No existe experiencia laboral con ese id' });
        }
        else {
            await Experiencia_1.Experiencia.destroy({
                where: {
                    id_persona: id_persona,
                    id: id_experiencia
                }
            });
            res.status(200).json({ text: 'Experiencia laboral eliminada correctamente' });
        }
    }
}
const experienciaController = new ExperienciaController();
exports.default = experienciaController;
