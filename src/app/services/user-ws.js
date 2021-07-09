import { _api } from "./api";

//Listar a todos los alumnos
export const usersListEndpoint = () =>_api.get(`/users/students`)
//para actualizar mi ussuario
export const usersUpdateEndpoint = (data) =>_api.patch(`/users/editMyUser`,data)
//para borrar un usuario
export const usersDeleteEndpoint = (id) =>_api.delete(`/users/${id}/deleteUser`)