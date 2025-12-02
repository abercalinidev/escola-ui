import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private httpClient : HttpClient) { }

  public buscarCep(cep : any) : Observable<any> {
    return this.httpClient.get<any>(`${environment.viaCepConnect}/${cep}/json`);
  }

  public salvarAluno(aluno : Aluno) : Observable<any> {
    return this.httpClient.post<any>(`${environment.apisConnect}/api/v1/alunos/salvar`, aluno);
  }

  public editarAluno(aluno : Aluno, alunoId : any) : Observable<any> {
    return this.httpClient.put<any>(`${environment.apisConnect}/api/v1/alunos/editar/${alunoId}`, aluno);
  }

  public buscarAlunoPorId(alunoId : any) : Observable<any> {
    return this.httpClient.get<any>(`${environment.apisConnect}/api/v1/alunos/buscar/${alunoId}`);
  }

  public inativarAluno(alunoId : any) : Observable<any> {
    return this.httpClient.put<any>(`${environment.apisConnect}/api/v1/alunos/inativar/${alunoId}`, null);
  }

  public ativarAluno(alunoId : any) : Observable<any> {
    return this.httpClient.put<any>(`${environment.apisConnect}/api/v1/alunos/ativar/${alunoId}`, null);
  }

  public listarAlunos() : Observable<any> {
    return this.httpClient.get<any>(`${environment.apisConnect}/api/v1/alunos/listar`);
  }
}
