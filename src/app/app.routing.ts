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
        loadChildren: '../app/pessoas/pessoas.module#PessoasModule'
    }

]
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRouting { }