import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../Models/Produto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) {

  }

  apiurl:string = "http://localhost:3000/produtos"

  getProdutos():Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiurl)
  }
  deleteProdutos(id:number):Observable<any>{
    return this.http.delete(`${this.apiurl}?id=${id}`)
  }
  
}
