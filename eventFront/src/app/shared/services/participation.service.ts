import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participation } from '../models/participation.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  private apiUrl = 'http://localhost:8080/api/participations';

  constructor(private http: HttpClient) {}

  addParticipation(p: Participation): Observable<Participation> {
    return this.http.post<Participation>(this.apiUrl, p);
  }

  getParticipations(): Observable<Participation[]> {
    return this.http.get<Participation[]>(this.apiUrl);
  }

  getParticipation(id: number): Observable<Participation> {
    return this.http.get<Participation>(`${this.apiUrl}/${id}`);
  }

  updateParticipation(id: number, p: Participation): Observable<Participation> {
    return this.http.put<Participation>(`${this.apiUrl}/${id}`, p);
  }

  deleteParticipation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
