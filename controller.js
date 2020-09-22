'use strict';

// import
var response = require('./rest')
var connection = require('./koneksi')

// buat modul
/**
 * @param req : request data yang dimita
 * @param res: response data yg diberikan
 */
exports.index = function(req, res){
    response.ok('Aplikasi rest express berhasil dijalankan', res)
}

exports.fetchAllMahasiswa = function(req, res){

    const query = 'SELECT * FROM mahasiswa';
    connection.query(query, function(err, row, fields) {
        if (err){
            console.log("Error : " + err);
        }

        response.ok(row, res)

    })
}