import {_api} from './api' //<<--- export solo una o varias en especifico

                        //data = {email:'algo@algo.com',password:'algo'}
export const loginEndpoint = (data) => _api.post('/auth/login',data);

export const signupEndpoint = (data) =>  _api.post('/auth/signup',data);

export const logoutEndpoint = () => _api.post('/auth/logout');