import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  constructor(private readonly router: Router) {}

  startGame() {
    this.router.navigate(['/main-screen']); // Redireciona para a tela principal
  }
}
