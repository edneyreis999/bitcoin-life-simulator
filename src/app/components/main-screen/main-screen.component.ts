import { Component, ViewChild } from '@angular/core';
import { EventNotificationComponent } from '../event-notification/event-notification.component';
import { PauseMenuComponent } from '../pause-menu/pause-menu.component';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [PauseMenuComponent, EventNotificationComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss',
})
export class MainScreenComponent {
  @ViewChild(PauseMenuComponent) pauseMenu!: PauseMenuComponent;
  @ViewChild(EventNotificationComponent)
  eventNotification!: EventNotificationComponent;

  openPauseMenu() {
    this.pauseMenu.openMenu();
  }

  showEventNotification() {
    if (this.eventNotification) {
      console.log('showing event notification');
      this.eventNotification.isVisible = true;
    }
  }
}
