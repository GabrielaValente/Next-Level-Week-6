const sqlite3 = require('sqlite3');
const { open } = require('sqlite')


module.exports = () =>
    open({
        filename: './src/db/rocketq.sqlite', //caminho do banco de dados
        driver: sqlite3.Database,
    });