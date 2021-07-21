import {_api} from './api';

export const inventoryListEndpoint = () => _api.get('/inventory')
//traer el detalle dee un curso por id
export const inventoryCreateEndpoint= (data) =>_api.post(`/inventory/create-product`, data)
//para actualizar un curso
