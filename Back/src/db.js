import {createPool} from 'mysql2/promise'

export const pool = createPool({
user: 'root',
password: 'fedesabi8818',
host: 'localhost',
port: 3306,
database: 'proyecto_inmobiliaria'
})

