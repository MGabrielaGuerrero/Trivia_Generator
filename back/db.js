import { Sequelize } from "sequelize/types";

const sequelize = new  Sequelize('id18034453_juegotrivia', 'id18034453_mosquera', '>CCT4z|Co0w4}Y<', {
    host: "localhost",
    dialect: 'mysql2'
})

    (async () => {
        try {
            await sequelize.authenticate();
            console.log("conexcion a la BD Existosa")
        } catch (err) {
            console.error("Conexion a la BD fallida", err)
        }
    })

module.exports = sequelize