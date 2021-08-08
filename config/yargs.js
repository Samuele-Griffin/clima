const opciones = require('./variables.js');
const argv = require('yargs')
    .command('clima', 'Se establece el clima en base a una latitud y a una longuitud', opciones)
    .help()
    .argv;

module.exports = { argv };