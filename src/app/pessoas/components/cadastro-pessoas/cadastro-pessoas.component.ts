import { PessoaService } from './../../services/pessoas.service';
import { Pessoa } from './../../models/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrls: ['./cadastro-pessoas.component.css'],
  providers: [PessoaService]
})
export class CadastroPessoasComponent implements OnInit {

  public pessoa: Pessoa = new Pessoa();

  public constructor(private pessoaService: PessoaService) { }

  public ngOnInit() {

  }

  public gravar(): void {
    if (this.pessoa.id) {
      this.editarPessoa();
    } else {
      this.novaPessoa();
    }
  }

  private novaPessoa() {
    this.pessoaService.salvar(this.pessoa).subscribe(
      (pessoa: Pessoa) => {
        this.pessoa = pessoa;
      },
      (error) => {

      },
      () => {

      }
    );
  }

  private editarPessoa() {
    this.pessoaService.editar(this.pessoa, this.pessoa.id).subscribe(
      (pessoa: Pessoa) => {
        this.pessoa = pessoa;
      },
      (error) => {

      },
      () => {

      }
    );
  }



}
