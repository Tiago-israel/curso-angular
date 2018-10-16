import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarPessoasComponent } from "./components/listar-pessoas/listar-pessoas.component";
import { CadastroPessoasComponent } from "./components/cadastro-pessoas/cadastro-pessoas.component";


export const pessoasRoutes: Routes = [
    {
        path: '',
        component: ListarPessoasComponent,
    },
    {
        path: 'novo',
        component: CadastroPessoasComponent
    },
    {
        path: 'editar/:id',
        component: CadastroPessoasComponent
    },
    {
        path: 'detalhes/:id',
        component: CadastroPessoasComponent
    }

]
@NgModule({
    imports: [RouterModule.forChild(pessoasRoutes)],
    exports: [RouterModule]
})
export class PessoasRouting { }