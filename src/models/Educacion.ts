import {DataTypes} from 'sequelize';
import sequelize from '../database';

export const Educacion = sequelize.define('educacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    }
},{
    timestamps: false
})
