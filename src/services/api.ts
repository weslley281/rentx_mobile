import axios from 'axios';

export const api = axios.create({
  //casa
  baseURL: 'http://192.168.1.4:3333',
  //serviço
  //baseURL: 'http://192.168.15.41:5000',
});
