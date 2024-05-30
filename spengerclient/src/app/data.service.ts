import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Patient} from './models/Patient';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private patientUrl: string = 'http://localhost:8080/api/patient/';
  
  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl)
    .pipe(catchError(this.handleError('getPatientDetail', [])));
  }

  public getPatient(id: string): Observable<Patient> {
    return this.http.get<Patient>(this.patientUrl + id)
    .pipe(catchError(this.handleError('getPatientDetail',new Patient())));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => { 
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as any);
    };
  }
}

