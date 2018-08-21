import { CadastroPessoasComponent } from './pessoas/components/cadastro-pessoas/cadastro-pessoas.component';
import { ListarPessoasComponent } from './pessoas/components/listar-pessoas/listar-pessoas.component';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '../../node_modules/@angular/core';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pessoas',
        pathMatch: 'full'
    },
    {
        path: 'pessoas',
        component: ListarPessoasComponent
    },
    {
        path: 'pessoas/novo',
        component: CadastroPessoasComponent
    },
    {
        path: 'pessoas/editar/:id',
        component: CadastroPessoasComponent
    },
    {
        path: 'pessoas/detalhes/:id',
        component: CadastroPessoasComponent
    }

]
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRouting { }