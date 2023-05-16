import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  url = 'http://localhost:8000/api/reserva/';

  constructor(private http: HttpClient) { }

  getReserva(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarReserva(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarReserva(reserva: Reserva): Observable<any> {
    return this.http.post(this.url, reserva);
  }

  obtenerReserva(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarReserva(id:string, reserva: Reserva): Observable<any>{
    return this.http.put(this.url + id, reserva);
  }
}
