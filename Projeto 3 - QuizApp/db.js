const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',       // Host onde o MySQL está instalado
  user: 'root',     // Nome de usuário do MySQL
  password: '1234',   // Senha do MySQL
  database: 'quiz', // Nome do banco de dados que você criou 1
});

module.exports = connection;
