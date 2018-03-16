import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RequestOptions } from '@angular/http';

import { AddIngredienteCommand } from '../../commands/ingrediente/add-ingrediente-command';
import { UpdateIngredienteCommand } from '../../commands/ingrediente/update-ingrediente-command';
import { IngredienteDto } from '../../dtos/ingrediente-dto';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IngredienteService {

  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<IngredienteDto[]> {
    return this.http.get<IngredienteDto[]>(`${environment.apiUrl}ingredientes`);
  }

  public getById(id: number): Observable<IngredienteDto> {   
    
    return this.http.get<IngredienteDto>(`${environment.apiUrl}ingredientes/${id}`);
  }

  public create(addCommand: AddIngredienteCommand): Observable<IngredienteDto> {
    return this.http.post<IngredienteDto>(`${environment.apiUrl}ingredientes`, addCommand);
  }

  public update(updateCommand: UpdateIngredienteCommand): Observable<IngredienteDto> {
    return this.http.put<IngredienteDto>(`${environment.apiUrl}ingredientes`, updateCommand);
  }

}
