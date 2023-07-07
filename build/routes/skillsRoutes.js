"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//agregar controlador
class SkillsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/'); // skillsController.get
        this.router.post('/'); // skillsController.save
        this.router.put('/:id'); // skillsController.update
        this.router.delete('/:id'); // skillsController.delete
    }
}
const skillsRoutes = new SkillsRoutes();
exports.default = skillsRoutes.router;
