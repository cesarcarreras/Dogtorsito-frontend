import {_api} from './api';

//Traer el inventario
export const inventoryListEndpoint = () => _api.get('/inventory')
//Crear Producto
export const inventoryCreateEndpoint= (data) =>_api.post('/inventory/create-item', data)
//Actualizar item
export const inventoryUpdateEndpoint = (data) => _api.patch('inventory/update-item', data)
//Borrar un item
export const inventoryDeleteEndpoint = (data) => _api.delete('/inventory/delete-item',data)