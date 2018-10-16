import { NgModule } from "@angular/core";
import { ListarPessoasComponent } from "./components/listar-pessoas/listar-pessoas.component";
import { CadastroPessoasComponent } from "./components/cadastro-pessoas/cadastro-pessoas.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PessoasRouting } from "./pessoas.routing";


@NgModule({
  declarations: [
    ListarPessoasComponent,
    CadastroPessoasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PessoasRouting
  ],
  providers: [
  ]
})
export class PessoasModule { }