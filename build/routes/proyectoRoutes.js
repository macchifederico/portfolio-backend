"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proyectoController_1 = __importDefault(require("../controllers/proyectoController"));
const tokenService_1 = __importDefault(require("../services/tokenService"));
class ProyectoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tokenService_1.default.verifyToken, proyectoController_1.default.obtenerProyectos);
        this.router.post('/', tokenService_1.default.verifyToken, proyectoController_1.default.crearProyecto);
        this.router.post('/', tokenService_1.default.verifyToken, proyectoController_1.default.getUnProyecto);
        this.router.put('/', tokenService_1.default.verifyToken, proyectoController_1.default.actualizarProyecto);
        this.router.delete('/', tokenService_1.default.verifyToken, proyectoController_1.default.deleteProyecto);
    }
}
const proyectoRoutes = new ProyectoRoutes();
exports.default = proyectoRoutes.router;
