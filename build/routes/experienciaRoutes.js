"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tokenService_1 = __importDefault(require("../services/tokenService"));
const experienciaController_1 = __importDefault(require("../controllers/experienciaController"));
class ExperienciaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tokenService_1.default.verifyToken, experienciaController_1.default.getExperienciaLaboral);
        this.router.get('/:id', tokenService_1.default.verifyToken, experienciaController_1.default.getUnaExpereriencia);
        this.router.post('/', tokenService_1.default.verifyToken, experienciaController_1.default.createExperienciaLaboral);
        this.router.put('/:id', tokenService_1.default.verifyToken, experienciaController_1.default.updateExperienciaLaboral);
        this.router.delete('/:id', tokenService_1.default.verifyToken, experienciaController_1.default.deleteExperienciaLaboral);
    }
}
const experienciaRoutes = new ExperienciaRoutes();
exports.default = experienciaRoutes.router;
