const axios = require('axios')

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

    constructor() {
        //TODO: leer DB si extiste

    }

    async ciudad( lugar = '') {

        try {
            
            console.log(lugar)
            //peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: {
                    'access-token': 'pk.eyJ1Ijoia2Flc2FyIiwiYSI6ImNremdhY3p5MDNwcjMyb29mZWowbDRjOHcifQ.42ERhM4WYXLAW-SzzbRX5g',
                    'limit': 5,
                    'language':'es',
                }
            }); 

            const resp = await instance.get();
            // console.log( 'Ciudad', lugar );
    
            //const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/pereira.json?language=es&access_token=pk.eyJ1Ijoia2Flc2FyIiwiYSI6ImNremdhY3p5MDNwcjMyb29mZWowbDRjOHcifQ.42ERhM4WYXLAW-SzzbRX5g&limit=5');
            console.log(resp.data)
    
            return []

        } catch (error) {
            return [];
        }

    }
}





module.exports = Busquedas;