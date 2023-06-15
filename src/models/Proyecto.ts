import {DataTypes} from 'sequelize';
import sequelize from '../database';

export const Proyecto = sequelize.define('proyecto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
