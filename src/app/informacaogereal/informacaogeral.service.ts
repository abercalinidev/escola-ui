import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InformacaoGeral } from './informacaoGeral';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class InformacaogeralService {

  constructor(private httpCliente : HttpClient) { }

  salvarInformacaoGeral(informacaoGeral : InformacaoGeral) : Observable<any> {
    return this.httpCliente.post<any>(`${environment.apisConnect}/api/v1/informacaogeral/salvar`, informacaoGeral);
  }

  editarInformacaoGeral(informacaoGeral : InformacaoGeral, informacaoGeralId : any) : Observable<any> {
    return this.httpCliente.put<any>(`${environment.apisConnect}/api/v1/informacaogeral/editar/${informacaoGeralId}`, informacaoGeral);
  }

  listarSituacoesGerais() : Observable<any> {
    return this.httpCliente.get<any>(`${environment.apisConnect}/api/v1/informacaogeral/listar`);
  }

  buscarInformacaoGeralId(id : any) : Observable<any> {
    return this.httpCliente.get<any>(`${environment.apisConnect}/api/v1/informacaogeral/buscar/${id}`);
  }

  excluirInformacaoGeral(id : any) : Observable<any> {
    return this.httpCliente.delete<any>(`${environment.apisConnect}/api/v1/informacaogeral/excluir/${id}`);
  }
}
