import { Component } from '@angular/core';
//Permitir a vinculação do input e das variáveis / for / if
import {CommonModule} from '@angular/common';
//Permite que o Angular gerencie o formulário / Viculo de botão com métodos
import {FormsModule} from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
// Atributo => Variável de uma classe 
  public nome = '';
    //Criando uma lista de atividades
    public lista = [
    {id:1, nome:"Dormir"},
    {id:2, nome:"Tomar remédio"},
 ];
    cancelar(): void {
    this.nome = '';
  }
  
}
