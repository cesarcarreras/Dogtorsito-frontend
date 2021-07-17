import {_api} from './api';

export const calendarCreateEndpoint = (data) => _api.post('/calendar/create',data)
//traer el detalle dee un curso por id
export const calendarListEndpoint = () =>_api.get(`/calendar`)
//para actualizar un curso
export const calendarUpdateEndpoint = (id,data) =>_api.patch(`/calendar/updateCalendar/${id}`,data)
//para borrar un curso
export const calendarDeleteEndpoint = (id) =>_api.delete(`/calendar/deleteCalendar/${id}`)