import { CadastroContato } from './../model/cadastroContato';

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const API_URL = " http://localhost:3000";
const httpOptions = {
  headers : new HttpHeaders(
    {
      'content-Type':'application/json;charset=utf-8' 
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http:HttpClient) { }

  //INSERT
addContato( contato:CadastroContato ){
  return this.http.post(`${API_URL}/dados`,contato,httpOptions);
}

  // RETRIEVE SINGLE
  getCliente(id: number) {
    return this.http.get<CadastroContato>(`${API_URL}/dados/${id}`, httpOptions);
  }

  // RETRIEVE ALL
  getClientes() {
    return this.http.get<CadastroContato[]>(`${API_URL}/dados`, httpOptions);
  }

  // UPDATE
  updateCliente(contato: CadastroContato) {
    return this.http.put(`${API_URL}/dados`, contato, httpOptions);
  }

  // DELETE
  deleteCliente(id: number) {
    return this.http.delete(`${API_URL}/dados/${id}`, httpOptions);
  }
}