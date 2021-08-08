const axios = require('./axios.js');

axios.getProvincia().then(provincia => {
    console.log("Datos de la provincia :");
    console.log(provincia);
    console.log("Datos del clima");
    return axios.getClima(provincia.lat, provincia.long).then(clima => console.log(clima))
        .catch(err => console.log(err));
});