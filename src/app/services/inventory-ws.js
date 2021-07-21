import {_api} from './api';
//Traer el inventario
export const inventoryListEndpoint = () => _api.get('/inventory')
//Crear Producto
export const inventoryCreateEndpoint= (data) =>_api.post('/inventory/create-product', data)