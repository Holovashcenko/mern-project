const express = require('express');
const config = require('config');
const mysql = require('mysql');
const AUTH_ROUTE = require('./routes/auth.routes');
const PORT = config.get('port') || 5000;
const Sequelize = require('sequelize');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});
module.exports = new Sequelize(
    db.user,
    db.password,
    db.database,
    {
        host: db.host,
        dialect: 'mysql'
    }
);
const app = express();

app.use('/api/auth', AUTH_ROUTE);

async function start() {
    try {
        await db.connect({
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log(`App has been started on ${PORT} port`));
    } catch (e) {
        console.log('Server Error', e.massage);
        process.exit(1);
    }
}
start();