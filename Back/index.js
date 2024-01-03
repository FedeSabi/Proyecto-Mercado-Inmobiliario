import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario', //cambiar usuario
  password: 'contraseña', // cambiar contraseña
  database: 'nombre_de_la_base_de_datos' // cambiar nombre base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ', err);
    return;
  }
  console.log('Conectado a la base de datos!');

  connection.query('SELECT * FROM tabla', (err, rows) => {
    if (err) {
      console.error('Error al realizar la consulta: ', err);
      return;
    }

    console.log('Resultados: ', rows);
  });

});
