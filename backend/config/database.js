const sql = require('mssql')
require('dotenv').config()

// Configuración de la conexión
const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    pool: {
        max: 10,           
        min: 0,            
        idleTimeoutMillis: 30000 
    },
    options: {
        encrypt: true,     
        trustServerCertificate: true
    }
}

class DbConnection {
    constructor() {
        this.pool = null
        this.connected = false
    }


    async connect() {
        try {
            if (!this.pool) {
                this.pool = await new sql.ConnectionPool(sqlConfig).connect()
                this.connected = true
                console.log('Conexión a la base de datos establecida')
            }
            return this.pool
        } catch (error) {
            console.error('Error al conectar a la base de datos:', error)
            throw error
        }
    }

    async query(queryString, params = {}) {
        try {
            const request = (await this.connect()).request()
            
            // Agregar parámetros si existen
            Object.keys(params).forEach(key => {
                request.input(key, params[key])
            })

            const result = await request.query(queryString)
            return result.recordset
        } catch (error) {
            console.error('Error al ejecutar query:', error)
            throw error
        }
    }

    async executeProcedure(procedureName, params = {}) {
        try {
            const request = (await this.connect()).request()
            
            // Agregar parámetros al stored procedure
            Object.keys(params).forEach(key => {
                request.input(key, params[key])
            })
        } catch (error) {
            console.error('Error al ejecutar procedimiento almacenado:', error)
            throw error
        }
    }

    async close() {
        try {
            if (this.pool) {
                await this.pool.close()
                this.pool = null
                this.connected = false
                console.log('Conexión a la base de datos cerrada')
            }
        } catch (error) {
            console.error('Error al cerrar la conexión:', error)
            throw error
        }
    }
}

const db = new DbConnection()
module.exports = db