import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AppEvent {
  domains?: string[];
  id: number;
  titre: string;
  description: string;
  date: Date;
  lieu: string;
  prix: number;
  organisateurId: number;
  imageUrl: string;
  nbplaces: number;
  nbrlikes: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<AppEvent[]> {
    return this.http.get<AppEvent[]>(this.baseUrl);
  }

  getEventById(id: number): Observable<AppEvent> {
    return this.http.get<AppEvent>(`${this.baseUrl}/${id}`);
  }

  addEvent(event: AppEvent): Observable<AppEvent> {
    return this.http.post<AppEvent>(this.baseUrl, event);
  }

  updateEvent(event: AppEvent): Observable<AppEvent> {
    return this.http.put<AppEvent>(this.baseUrl, event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
