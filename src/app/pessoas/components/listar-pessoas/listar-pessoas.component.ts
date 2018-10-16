import { PessoaService } from './../../services/pessoas.service';
import { Pessoa } from './../../models/pessoa';
import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../../node_modules/rxjs';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.css'],
  providers: [PessoaService]
})
export class ListarPessoasComponent implements OnInit {

  public pessoas$: Observable<Array<Pessoa>>;

  public constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  public ngOnInit() {
    this.pessoas$ = this.pessoaService.buscarTodos();
  }

  public editar(id: number): void {
    this.router.navigate([`/pessoas/editar/${id}`]);
  }

  public detalhar(id: number): void {
    this.router.navigate([`/pessoas/detalhes/${id}`]);
  }

  public excluir(id: number): void {
    this.pessoaService.excluir(id).subscribe(
      () => {
        this.pessoas$ = this.pessoaService.buscarTodos();
      }
    )
  }



}
