import { PessoaService } from './pessoas/services/pessoas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListarPessoasComponent } from './pessoas/components/listar-pessoas/listar-pessoas.component';
import { CadastroPessoasComponent } from './pessoas/components/cadastro-pessoas/cadastro-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPessoasComponent,
    CadastroPessoasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
