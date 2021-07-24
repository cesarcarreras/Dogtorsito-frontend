import {_api} from './api';

export const profileCreateEndpoint = (data) => _api.post('/petsprofile/create',data)

export const profileListEndpoint = () =>_api.get(`/petsprofile`)

export const profileUpdateEndpoint = (id,data) =>_api.patch(`/petsprofile/updateprofile/${id}`,data)

export const profileDeleteEndpoint = (id) =>_api.delete(`/petsprofile/deleteprofile/${id}`)