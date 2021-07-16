import axios from 'axios';

//validar si esta en deploy(prod)
const ifProduction = process.env.NODE_ENV === 'production';

// si la app esta ya en produccion ccolocara otra ruta de lo contrario usara el localhost
const baseURL = ifProduction ? "https://dogtorsito.herokuapp.com/api" : "http://localhost:3000/api";

//Mandar credenciales en los headers
axios.defaults.withCredentials = true;

export  const _api = axios.create({
    baseURL,
    timeout:10000
});