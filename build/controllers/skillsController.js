"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Skills_1 = require("../models/Skills");
class SkillController {
    async obtenerSkills(req, res) {
        const id_persona = req.userId;
        const skills = await Skills_1.Skills.findAll({
            where: {
                id_persona: id_persona
            }
        });
        res.status(200).json({
            msg: 'Skills obtenida correctamente',
            skills: skills
        });
    }
    async obtenerUnaSkill(req, res) {
        const id_persona = req.userId;
        const { id } = req.params;
        const skills = await Skills_1.Skills.findOne({
            where: {
                id_persona: id_persona,
                id: id
            }
        });
        res.status(200).json({
            msg: 'Skills obtenida correctamente',
            skills: skills
        });
    }
    async crearSkills(req, res) {
        const id_persona = req.userId;
        const { tecnologia, porcentaje } = req.body;
        if (!id_persona) {
            res.status(400).json({ msg: 'El id persona es obligatorio' });
        }
        else {
            await Skills_1.Skills.create({
                id_persona: id_persona,
                tecnologia: tecnologia,
                porcentaje: porcentaje
            });
            res.status(200).json({
                msg: 'Skills creada correctamente'
            });
        }
    }
    async actualizarSkills(req, res) {
        const id_persona = req.userId;
        const { tecnologia, porcentaje } = req.body;
        const { id } = req.params;
        const skillsByIdPersona = await Skills_1.Skills.findOne({
            where: {
                id_persona: id_persona,
                id: id
            }
        });
        if (!skillsByIdPersona) {
            res.status(400).json({ msg: 'No existe experiencia laboral con ese id' });
        }
        else {
            await Skills_1.Skills.update({
                tecnologia: tecnologia,
                porcentaje: porcentaje
            }, {
                where: {
                    id_persona: id_persona,
                    id: id
                }
            });
            res.status(200).json({ msg: 'Skills laboral actualizada correctamente' });
        }
    }
    async borrarSkills(req, res) {
        const id_persona = req.userId;
        const { id } = req.params;
        const skillsByIdPersona = await Skills_1.Skills.findOne({
            where: {
                id_persona: id_persona,
                id: id
            }
        });
        if (!skillsByIdPersona) {
            res.status(400).json({ msg: 'No existe Skills con ese id' });
        }
        else {
            await Skills_1.Skills.destroy({
                where: {
                    id_persona: id_persona,
                    id: id
                }
            });
            res.status(200).json({ msg: 'Skills laboral eliminada correctamente' });
        }
    }
}
const skillController = new SkillController();
exports.default = skillController;
