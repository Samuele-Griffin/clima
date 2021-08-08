const axios = require('axios');
const argv = require('./../config/yargs.js').argv;



let getProvincia = async() => {

    const url = encodeURI(argv.p);
    const getAPIProvincia = axios.create({ baseURL: `https://apis.datos.gob.ar/georef/api/provincias?nombre=${url}`, timeout: 1000 });

    let provincias = await getAPIProvincia.get();

    if (provincias.data.provincias === 0) {
        throw new Error("No se han encontrado datos al respecto");
    }

    let data = provincias.data.provincias;
    let nombre = data[0].nombre;
    let lat = data[0].centroide.lat;
    let long = data[0].centroide.lon;

    return {
        nombre,
        lat,
        long,
    }
}

let getClima = async(lat, long, api) => {

    const getAPIClima = axios.create({ baseURL: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a4f551d7df296622b91bed9cc717780d&units=metric`, timeout: 1000 });

    let clima = await getAPIClima.get();

    if (clima.data === 0) {
        throw new Error("No se han encontrado datos al respecto");
    }

    let data = clima.data.main;
    let temp = data.temp;
    let humedad = data.humidity;

    return {
        temp,
        humedad,
    }
};


module.exports = { getProvincia, getClima };