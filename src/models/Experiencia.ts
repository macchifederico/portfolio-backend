import {DataTypes} from 'sequelize';
import sequelize from '../database';

export const Experiencia = sequelize.define('experiencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_persona: {
        type: DataTypes.INTEGER,
    },
    nombreE: {
        type: DataTypes.STRING,
    },
    empresaE: {
        type: DataTypes.STRING,
    },
    descripcionE: {
        type: DataTypes.STRING,
    },
    en_proceso: {
        type: DataTypes.BOOLEAN,
    }
},{
    timestamps: false
})
