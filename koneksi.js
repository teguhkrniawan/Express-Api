var mysql = require('mysql')

// buat koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbexpressapi',
    port: '3306'
});

// lakukan koneksi
conn.connect((err) => {
    if (err) {
        throw err
    }
    console.log('Berhasil terhubung ke database mysql')
});

// jadikan conn sebagai modulue
module.exports = conn;