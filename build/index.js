"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const database_1 = __importDefault(require("./database"));
// Models
require("./models/AcercaDe");
require("./models/Educacion");
require("./models/Experiencia");
require("./models/Persona");
require("./models/Proyecto");
require("./models/Skills");
require('dotenv').config();
// Routes
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const acercaDeRoutes_1 = __importDefault(require("./routes/acercaDeRoutes"));
// Server
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/auth', authRoutes_1.default);
        this.app.use('/acercade', acercaDeRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor corriendo en ', this.app.get('port'));
        });
    }
    async startDB() {
        try {
            await database_1.default.sync({ force: false, alter: false });
            console.log('Conección establecida correctamente.');
        }
        catch (error) {
            console.error('Imposible conectarse a DB:', error);
        }
    }
}
const server = new Server();
server.startDB();
server.start();
