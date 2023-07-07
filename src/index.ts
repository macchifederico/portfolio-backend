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
import educacionRoutes from './routes/educacionRoutes';
import experienciaRoutes from './routes/experienciaRoutes';
import personaRoutes from './routes/personaRoutes';
import proyectoRoutes from './routes/proyectoRoutes';
import skillsRoutes from './routes/skillsRoutes';

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
        this.app.use('/api/auth', authRoutes);
        this.app.use('/api/persona', personaRoutes);
        this.app.use('/api/acercade', acercaDeRoutes);
        this.app.use('/api/educacion', educacionRoutes);
        this.app.use('/api/experiencia', experienciaRoutes);
        this.app.use('/api/proyecto', proyectoRoutes);
        this.app.use('/api/skills', skillsRoutes);
    }
    

    start(): void{
        this.app.listen(this.app.get('port'), ()=> {
            console.log('Servidor corriendo en ', this.app.get('port'));
        })
    }

    async startDB(){
        try {
            await sequelize.sync({force: false, alter: true});
            console.log('Conección establecida correctamente.');
        } catch(error) {
            console.error('Imposible conectarse a DB:', error);            
        }
    }
}

const server = new Server();
server.startDB();
server.start();
