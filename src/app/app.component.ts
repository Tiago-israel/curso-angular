import { Pessoa } from './pessoas/models/pessoa';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    title = 'curso-angular';


    ngOnInit(): void {
        this.rest(2, 3, 4, 6, 7, 8, 1, 9, 7, "ola", ['a', 'b']);
        let dados = this.buscarPessoas();
        dados.then((data) => console.log(data));
    }

    public async buscarPessoas(): Promise<Array<Pessoa>> {
        let response = await fetch(`http://localhost:3000/pessoas`);
        return response.json() as Promise<Array<Pessoa>>;
    }

    public rest(...variaveis) {
        // variaveis.forEach(function(dado) {
        //     console.log(dado)
        // });
    }


    // fetch(`http://localhost:3000/pessoas`).then((response) => {
    //    return response.json() as Promise<Pessoa[]>
    // }).then((data)=>{console.log(data)});


}
