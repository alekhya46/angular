import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TalkService {


  constructor(private http: HttpClient) {}  


getProducts(){
  return this.http.get<any>('http://localhost:3000/products');
}
addtheProduct(product){
  return this.http.post<any>('http://localhost:3000/products',product)
}
updatetheProduct(id,product){
  return this.http.put<any>('http://localhost:3000/products/'+id, product)
}

deletetheProduct(id){
  return this.http.delete<any>('http://localhost:3000/products/'+id)
}



}
