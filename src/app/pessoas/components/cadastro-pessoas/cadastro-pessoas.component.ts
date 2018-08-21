import { PessoaService } from './../../services/pessoas.service';
import { Pessoa } from './../../models/pessoa';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrls: ['./cadastro-pessoas.component.css'],
  providers: [PessoaService]
})
export class CadastroPessoasComponent implements OnInit {

  public pessoa: Pessoa = new Pessoa();
  public detalhes: boolean = false;

  public constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private activatedtRoute: ActivatedRoute
  ) { }

  public ngOnInit() {

    this.activatedtRoute.url.subscribe(
      (data: Array<any>) => {
        let detalhe = data.find(x => x.path == 'detalhes');
        if (detalhe) {
          this.detalhes = true;
        }
      }
    )

    this.activatedtRoute.params.subscribe(
      (param) => {
        let id = param["id"];
        if (id) {
          this.buscarPessoaPorId(id);
        }
      }
    )
  }

  public gravar(): void {
    if (this.pessoa.id) {
      this.editarPessoa();
    } else {
      this.novaPessoa();
    }
  }

  private novaPessoa(): void {
    this.pessoaService.salvar(this.pessoa).subscribe(
      (pessoa: Pessoa) => {
        this.pessoa = pessoa;
        this.router.navigate(['pessoas']);
      }
    );
  }

  private editarPessoa(): void {
    this.pessoaService.editar(this.pessoa, this.pessoa.id).subscribe(
      (pessoa: Pessoa) => {
        this.pessoa = pessoa;
        this.router.navigate(['pessoas']);
      }
    );
  }

  private buscarPessoaPorId(id: number): void {
    this.pessoaService.buscarPorId(id).subscribe(
      (pessoa: Pessoa) => {
        this.pessoa = pessoa;
      }
    )
  }

}
