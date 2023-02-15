import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Olá, eu sou o {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      
    </a>
  `,
})
export class App {
  name = 'Temporizador Tabata ';
}

bootstrapApplication(App);

let title = "Temporizador Tabata";
document.getElementById('app').innerHTML = title;

let action = '-';
let second = 3;
let round =0;
let intervalId =  setInterval(() => {
  if (round <1) action = 'Prepare-se!';
  else if (round < 8) action = 'Feito!';
  else if (second > 10 ) action = 'Vamos lá!';
  else action = 'Descanso! Você merece (=';
  document.getElementById('app-acao').innerHTML = action;
})