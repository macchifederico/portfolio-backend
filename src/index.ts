import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import sequelize from './database';

// Models
import './models/AcercaDe';
import './models/Educacion';
import './models/Experiencia';
import './models/Persona';
import './models/Proyecto';
import './models/Skills';

require('dotenv').config();

// Routes
import authRoutes from './routes/authRoutes';
import acercaDeRoutes from './routes/acercaDeRoutes';

// Server
class Server {

    public app: Application;
    
    constructor(){
        this.app = express();        
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}))
    }

    routes(): void{
        this.app.use('/auth', authRoutes);
        this.app.use('/acercade', acercaDeRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), ()=> {
            console.log('Servidor corriendo en ', this.app.get('port'));
        })
    }

    async startDB(){
        try {
            await sequelize.sync({force: false, alter: false});
            console.log('Conección establecida correctamente.');
        } catch(error) {
            console.error('Imposible conectarse a DB:', error);            
        }
    }
}

const server = new Server();
server.startDB();
server.start();
