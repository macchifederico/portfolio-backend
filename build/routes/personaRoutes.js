"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//agregar controlador
class PersonaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/'); // personaController.get
        this.router.post('/'); // personaController.save
        this.router.put('/:id'); // personaController.update
        this.router.delete('/:id'); // personaController.delete
    }
}
const personaRoutes = new PersonaRoutes();
exports.default = personaRoutes;
