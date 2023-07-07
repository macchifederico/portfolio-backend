"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Skills_1 = require("../models/Skills");
class SkillController {
    async obtenerSkills(req, res) {
        const { id_persona } = req.body;
        const skills = await Skills_1.Skills.findAll({
            where: {
                id_persona: id_persona
            }
        });
        res.status(200).json({
            msg: 'Skills obtenida correctamente',
            Skillss: Skills_1.Skills
        });
    }
    async obtenerUnaSkill(req, res) {
        const { id_persona, id_skills } = req.body;
        const skills = await Skills_1.Skills.findOne({
            where: {
                id_persona: id_persona,
                id: id_skills
            }
        });
        res.status(200).json({
            msg: 'Skills obtenida correctamente',
            skills: skills
        });
    }
    async crearSkills(req, res) {
        const { id_persona, empresa, cargo, fecha_inicio, fecha_fin, en_proceso } = req.body;
        if (!id_persona) {
            res.status(400).json({ msg: 'El id persona es obligatorio' });
        }
        else {
            await Skills_1.Skills.create({
                id_persona: id_persona,
                empresa: empresa,
                cargo: cargo,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            });
            res.status(200).json({
                msg: 'Skills creada correctamente'
            });
        }
    }
    async actualizarSkills(req, res) {
        const { id_skills, id_persona, empresa, cargo, fecha_inicio, fecha_fin, en_proceso } = req.body;
        const skillsByIdPersona = await Skills_1.Skills.findOne({
            where: {
                id_persona: id_persona,
                id: id_skills
            }
        });
        if (!skillsByIdPersona) {
            res.status(400).json({ msg: 'No existe experiencia laboral con ese id' });
        }
        else {
            await Skills_1.Skills.update({
                empresa: empresa,
                cargo: cargo,
                fecha_inicio: fecha_inicio,
                fecha_fin: fecha_fin,
                en_proceso: en_proceso
            }, {
                where: {
                    id_persona: id_persona,
                    id: id_skills
                }
            });
            res.status(200).json({ msg: 'Skills laboral actualizada correctamente' });
        }
    }
    async borrarSkills(req, res) {
        const { id_skills, id_persona } = req.body;
        const skillsByIdPersona = await Skills_1.Skills.findOne({
            where: {
                id_persona: id_persona,
                id: id_skills
            }
        });
        if (!skillsByIdPersona) {
            res.status(400).json({ msg: 'No existe Skills con ese id' });
        }
        else {
            await Skills_1.Skills.destroy({
                where: {
                    id_persona: id_persona,
                    id: id_skills
                }
            });
            res.status(200).json({ msg: 'Skills laboral eliminada correctamente' });
        }
    }
}
const skillController = new SkillController();
exports.default = skillController;
