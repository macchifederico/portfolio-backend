import {DataTypes} from 'sequelize';
import sequelize from '../database';

export const Skills = sequelize.define('skills', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_persona: {
        type: DataTypes.INTEGER,
    },
    tecnologia: {
        type: DataTypes.STRING,
    },
    porcentaje: {
        type: DataTypes.INTEGER,
    }
},{
    timestamps: false
})
