import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment'; 
import { Representante } from './representante';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {

  constructor(private httpClient : HttpClient) { }

    public buscarCep(cep : any) : Observable<any> {
      return this.httpClient.get<any>(`${environment.viaCepConnect}/${cep}/json/`);
    }

    public salvarRepresentante(representante : Representante) : Observable<any> {
      return this.httpClient.post<Representante>(`${environment.apisConnect}/api/v1/representante/salvar`, representante);
    }

    public listarRepresentantes() : Observable<any> {
      return this.httpClient.get<any>(`${environment.apisConnect}/api/v1/representante/listar`);
    }

    public buscarRepresentantePorId(id : any) : Observable<any> {
      return this.httpClient.get<any>(`${environment.apisConnect}/api/v1/representante/buscar/${id}`);
    }

    public editarRepresentante(representante : Representante, id : any) {
      return this.httpClient.put<any>(`${environment.apisConnect}/api/v1/representante/editar/${id}`, representante);
    }

    public inativarRepresentante(id : any) : Observable<any> {
      return this.httpClient.put<any>(`${environment.apisConnect}/api/v1/representante/inativar/${id}`, null);
    }

    public ativarRepresentante(id : any) : Observable<any> {
      return this.httpClient.put<any>(`${environment.apisConnect}/api/v1/representante/ativar/${id}`, null);
    }
}
