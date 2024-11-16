import { Component, ViewChild } from '@angular/core';
import { PauseMenuComponent } from '../pause-menu/pause-menu.component';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [PauseMenuComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss',
})
export class MainScreenComponent {
  @ViewChild(PauseMenuComponent) pauseMenu!: PauseMenuComponent;

  openPauseMenu() {
    this.pauseMenu.openMenu();
  }
}
