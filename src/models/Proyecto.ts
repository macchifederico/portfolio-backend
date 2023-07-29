import {DataTypes} from 'sequelize';
import sequelize from '../database';

export const Proyecto = sequelize.define('proyecto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_persona: {
        type: DataTypes.INTEGER,
    },
    nombreProyecto: {
        type: DataTypes.STRING,
    },
    descrProyecto: {
        type: DataTypes.STRING,
    },
    urlProyecto: {
        type: DataTypes.STRING,
    }
},{
    timestamps: false
})
