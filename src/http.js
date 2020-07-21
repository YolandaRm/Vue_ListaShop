/* creamos la class con un constructor que reciba la base url 
simplificando por medio de axios con una instancia personalizada
en vez de
   constructor(baseURL) {
        this._baseURL = baseURL;
      getAll(){
        return axios.get(this._baseURL)
    }
*/
import axios from 'axios';

export class HTTPService {
    constructor(http){
        this._http = http;
    }
    getAll(){
        return this._http.get('');
    }
}

export const httpService = new HTTPService(
    axios.create({
        baseURL: 'http://localhost:3005/items'
    })
);