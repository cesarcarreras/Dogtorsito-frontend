import {_api} from './api';

export const profileCreateEndpoint = (data) => _api.post('/petsprofile/create',data)
//traer el detalle dee un curso por id
export const profileListEndpoint = () =>_api.get(`/petsprofile`)
//para actualizar un curso
export const profileUpdateEndpoint = (id,data) =>_api.patch(`/petsprofile/updateprofile/${id}`,data)
//para borrar un curso
export const profileDeleteEndpoint = (id) =>_api.delete(`/petsprofile/deleteprofile/${id}`)