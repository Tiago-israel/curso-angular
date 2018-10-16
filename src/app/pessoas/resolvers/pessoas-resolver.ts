import { PessoaService } from './../services/pessoas.service';
import { Pessoa } from './../models/pessoa';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PessoasResolver implements Resolve<Observable<Array<Pessoa>>>{

    constructor(private injector: Injector) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const pessoaService: PessoaService = this.injector.get(PessoaService);
        return pessoaService.buscarTodos();
    }
}