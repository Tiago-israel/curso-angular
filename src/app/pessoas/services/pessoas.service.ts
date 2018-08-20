import { Pessoa } from './../models/pessoa';
import { Injectable } from "../../../../node_modules/@angular/core";
import { HttpClient } from "../../../../node_modules/@angular/common/http";
import { Observable } from "../../../../node_modules/rxjs";

@Injectable()
export class PessoaService {

    private readonly baseUrl: string = `http://localhost:3000/pessoas`;

    public constructor(private http: HttpClient) { }

    public buscarTodos(): Observable<Array<Pessoa>> {
        return this.http.get<Array<Pessoa>>(this.baseUrl);
    }

    public buscarPorId(id: number): Observable<Pessoa> {
        return this.http.get<Pessoa>(`${this.baseUrl}/${id}`);
    }

    public salvar(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.post<Pessoa>(this.baseUrl, pessoa);
    }

    public editar(pessoa: Pessoa, id: number): Observable<Pessoa> {
        return this.http.put<Pessoa>(`${this.baseUrl}/${id}`, pessoa);
    }

    public excluir(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

}