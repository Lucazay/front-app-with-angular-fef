import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { API_CONFIG } from '../config/api_config';
import { Customer } from '../model/customer';

@Injectable()
export class CustomerService {
    url = API_CONFIG.urlApi
  constructor(private http: HttpClient) {}
  save (customer: Customer) : Observable<Customer[]> {
    return this.http.post<Customer[]>(this.url+'/customer/insert', customer);
  }

  list() : Observable<Customer[]>{
  return this.http.get<Customer[]>(this.url+'/customer/list');
}

  delete(idCustomer:any) : Observable<Customer[]>{
  return this.http.delete<Customer[]>(`${this.url}/customer/delete/${idCustomer}`);
}

  findById(idCustomer: any): Observable<Customer> {
  return this.http.get<any>(`${this.url}/customer/findCustomer/${idCustomer}`);
}

  update(customer: Customer) : Observable<Customer>{
    return this.http.put<Customer>(this.url+'/customer/update', customer);
  }
}