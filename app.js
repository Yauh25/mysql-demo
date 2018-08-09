const express = require('express')
const mysql = require('mysql')
const app = express()

// const db = mysql.createConnection({
//     host     : 'edroche-authentification.cfy17jndaagr.eu-west-3.rds.amazonaws.com',
//     user     : 'root',
//     password : 'Linkin2312*',
//     database : 'Authentification'
// })

const db = mysql.createConnection({
    host     : '104.154.198.17',
    user     : 'dev',
    password : 'dev',
    database : 'Authentification'
})

// db.connect((err) => {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log('Connected')
//     }
// })

/*db.query('SELECT * FROM User', function (error, results) {
    if (error) throw error;
    console.log(results);
});*/

app.get('/api/v1/users', (req,res) => {

    db.connect((err) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('Connected')
        }
    })

    db.query('SELECT * FROM User', function (error, results) {
        if (error) throw res.json(error)
        res.json(results)
    });
})

app.listen(8080, () => console.log('Started on port 8080.'))