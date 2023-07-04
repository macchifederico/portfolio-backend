"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const acercaDeController_1 = __importDefault(require("../controllers/acercaDeController"));
const tokenService_1 = __importDefault(require("../services/tokenService"));
class AcercaDeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', tokenService_1.default.verifyToken, acercaDeController_1.default.getAcerca);
        this.router.post('/', tokenService_1.default.verifyToken, acercaDeController_1.default.create);
        this.router.put('/:id', tokenService_1.default.verifyToken, acercaDeController_1.default.update);
        this.router.delete('/:id', tokenService_1.default.verifyToken, acercaDeController_1.default.delete);
    }
}
const acercaDeRoutes = new AcercaDeRoutes();
exports.default = acercaDeRoutes.router;
