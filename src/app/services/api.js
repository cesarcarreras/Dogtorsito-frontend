import axios from 'axios'

//validar si mi apliacion esta en deploy(prod)
const ifProduction = process.env.NODE_ENV === 'production'

// si la app esta ya en produccion ccolocara otra ruta de lo contrario usara el localhost
const baseURL = ifProduction ? "www.herokuAppCesar.com/api" : "http://localhost:3000/api"

//es para mandar credencialees en los headers
axios.defaults.withCredentials = true

export  const _api = axios.create({
    baseURL,
    timeout:10000
})