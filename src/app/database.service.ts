import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  saveFormData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/location`, this.saveFormData);
  }
}
