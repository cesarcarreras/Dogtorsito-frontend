import { _api } from "./api";

//Listar a todos los usuarios
export const usersListEndpoint = () =>_api.get(`/users/students`)
//para actualizar mi usuario
export const usersUpdateEndpoint = (data) =>_api.patch(`/users/editMyUser`,data)
//para borrar un usuario
export const usersDeleteEndpoint = (id) =>_api.delete(`/users/${id}/deleteUser`)