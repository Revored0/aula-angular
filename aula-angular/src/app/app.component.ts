import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']  // Corrigido aqui
})
export class AppComponent {
  title = 'Título teste';
  listaItens = ['maça', 'banana', 'Laranja'];
  mensagem: string = '';  // Declaração da variável mensagem

  dizerOi() {
    this.mensagem = 'Olá mundo';
  }
}
