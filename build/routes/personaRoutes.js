"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tokenService_1 = __importDefault(require("../services/tokenService"));
const personaController_1 = __importDefault(require("../controllers/personaController"));
class PersonaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tokenService_1.default.verifyToken, personaController_1.default.obtenerPersona);
        this.router.post('/', tokenService_1.default.verifyToken, personaController_1.default.crearPersona);
        this.router.put('/:id', tokenService_1.default.verifyToken, personaController_1.default.updatePersona);
        this.router.delete('/:id', tokenService_1.default.verifyToken, personaController_1.default.deletePersona);
    }
}
const personaRoutes = new PersonaRoutes();
exports.default = personaRoutes.router;
