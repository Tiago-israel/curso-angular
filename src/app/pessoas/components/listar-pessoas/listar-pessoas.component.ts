import { Pessoa } from './../../models/pessoa';
import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.css']
})
export class ListarPessoasComponent implements OnInit {

  public pessoas: Observable<Pessoa>;

  public constructor() { }

  public ngOnInit() {

  }

}
