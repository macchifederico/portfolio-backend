import {DataTypes} from 'sequelize';
import sequelize from '../database';
import educacion from '../controllers/educacionController';

export const Educacion = sequelize.define('educacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_persona: {
        type: DataTypes.INTEGER,
    },
    titulo: {
        type: DataTypes.STRING,
    },
    institucion: {
        type: DataTypes.STRING,
    },
    fechaInicio: {
        type: DataTypes.DATE,
        
    },
    fechaFin: {
        type: DataTypes.DATE,
    },
    en_proceso:{
        type: DataTypes.BOOLEAN,
    }
},{
    timestamps: false,
    tableName: "educacion"
})
