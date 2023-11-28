'use strict';
//importaciones
const express = require('express');//importo el paquete
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

//uso
const app = express();//llamo para ser usado el paquete
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DEJO ENTRAR A LAS RUTAS DESDE FUERA, EVITO ERROR CORS
app.use(cors())

//get para el recurso hola
app.get('/hola', (req, res) => {
    res.send({ message: "Hola món des de /hola" })
})

app.post('/hello', (req, res) => {
    res.send({ message: "Hola món des de /hello" })
})

app.get('/', (req, res) => {
    res.send({ message: "Estic al meu servidor node express" })
})

////// AIXÒ ÉS NOU I SERIA PER TREBALLAR AMB MYSQL
////// COMPTE: hem d'instal·lar mysql per a Node Express amb npm i -S mysql
////// importem mysql

////// declarem els paràmetres de connexió (millor si l’usuari de connexió no és root sinó un usuari específic per aquesta BBDD
////// i amb permissos restringits
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'vueling',
    user: 'root',
    password: ''
});
/////// fem servir la BBDD que tenim
app.post('/api/login', function (req, res) {
    console.log("estem a login");
    ////// provem de connectar-nos i capturar possibles errors
    connection.connect(function (err) {
        console.log(err);
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
        console.log('Connected as id ' + connection.threadId);
    });
    connection.query('SELECT * FROM users', function (error, results, field) {
        if (error) {
            res.status(400).send({
                error: true,
                resultats: null,
                message: "Hi ha un error en la consulta"
            })
        } else {
            //////COMPROVACIÓ DE DADES PER CONSOLA DE NODE
            // console.log(results);
            // results.forEach(result => {
            // console.log(result.user);
            // })
            res.status(200).send(
                {
                    error: false,
                    resultats: results,
                    message: "Perfecte!!!"
                }
            )
        }
    });
})

app.post('/api/logininsert', function (req, res) {
    const { username, userpass } = req.body;

    connection.query('INSERT INTO users (username, userpass) VALUES (?, ?)', [username, userpass], function (error, results) {
        if (error) {
            console.error('Error en la inserción de usuario:', error);
            res.status(400).send({
                error: true,
                resultats: null,
                mensaje: "Error en la inserción de usuario"
            });
        } else {
            res.status(200).send({
                error: false,
                resultats: results,
                mensaje: "Usuario insertado con éxito"
            });
        }
        connection.connect(function (err) {
            if (err) {
                console.error('Error en la conexión a la base de datos:', err.stack);
                return;
            }
            console.log('Conexión a la base de datos exitosa con el id ' + connection.threadId);
        });
    });
});

app.listen(3000, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3000')
})



app.get('/vueling/booking', function (req, res) {
    console.log("Estamos en login GET");
    connection.query('SELECT nomCiutat FROM ciutats', function (error, results, field) {
        if (error) {
            res.status(400).json({
                error: true,
                results: null,
                message: "Error en la consulta a la base de datos"
            });
        } else {
            res.status(200).json({
                error: false,
                results: results,
                message: "Consulta GET HECHA"
            });
        }
    });
});


app.post('/vueling/login', function (req, res) {
    console.log("Estamos en login POST");

    const { email, password } = req.body;

    // Verificar el usuario y la contraseña en la base de datos
    connection.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {
        if (error) {
            console.error(error);
            res.status(400).json({
                error: true,
                results: null,
                message: "Error al autenticar"
            });
        } else {
            if (results.length > 0) {
                res.status(200).json({
                    error: false,
                    results: results,
                    message: "Autenticación exitosa"
                });
            } else {
                res.status(401).json({
                    error: true,
                    results: null,
                    message: "Credenciales incorrectas"
                });
            }
        }
    });








});

app.post('/vueling/register', function (req, res) {
    const { Nom, Cognoms, email, password, DNI_complet } = req.body;

    // Verificar si el usuario ya existe en la base de datos
    connection.query('SELECT * FROM usuarios WHERE email = ?', [email], function (error, results, fields) {
        if (error) {
            console.error(error);
            res.status(400).json({
                error: true,
                results: null,
                message: "Error al verificar usuario existente"
            });
        } else {
            if (results.length > 0) {
                res.status(409).json({
                    error: true,
                    results: null,
                    message: "El correo electrónico ya está registrado"
                });
            } else {
                connection.query('INSERT INTO usuarios (Nom, Cognoms, email, password, DNI_complet) VALUES (?, ?, ?, ?, ?)', [Nom, Cognoms, email, password, DNI_complet], function (error, results) {
                    if (error) {
                        console.error('Error en la inserción de usuario:', error);
                        res.status(400).json({
                            error: true,
                            results: null,
                            message: "Error en la inserción de usuario"
                        });
                    } else {
                        res.status(201).json({
                            error: false,
                            results: results,
                            message: "Usuario registrado con éxito"
                        });
                    }
                });
            }
        }
    });
});
