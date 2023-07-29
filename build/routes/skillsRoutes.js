"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tokenService_1 = __importDefault(require("../services/tokenService"));
const skillsController_1 = __importDefault(require("../controllers/skillsController"));
class SkillsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', tokenService_1.default.verifyToken, skillsController_1.default.obtenerUnaSkill);
        this.router.get('/', tokenService_1.default.verifyToken, skillsController_1.default.obtenerSkills);
        this.router.post('/', tokenService_1.default.verifyToken, skillsController_1.default.crearSkills);
        this.router.put('/:id', tokenService_1.default.verifyToken, skillsController_1.default.actualizarSkills);
        this.router.delete('/:id', tokenService_1.default.verifyToken, skillsController_1.default.borrarSkills);
    }
}
const skillsRoutes = new SkillsRoutes();
exports.default = skillsRoutes.router;
