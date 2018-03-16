import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RequestOptions } from '@angular/http';


import { environment } from '../../../environments/environment';
import { LancheDto } from '../../dtos/lanche-dto';
import { PedidoCommand } from '../../commands/pedido/pedido-command';
import { PedidoDto } from '../../dtos/pedido-dto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LancheService {

  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<LancheDto[]> {
    return this.http.get<LancheDto[]>(`${environment.apiUrl}lanches`);
  }

  public getById(id: number): Observable<LancheDto> {       
    return this.http.get<LancheDto>(`${environment.apiUrl}lanches/${id}`);
  }

  public calcular(pedidoCommand: PedidoCommand): Observable<PedidoDto> {
    return this.http.post<PedidoDto>(`${environment.apiUrl}lanches/calcular`, pedidoCommand);
  }


}
