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