import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-notification',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-notification.component.html',
  styleUrl: './event-notification.component.scss',
})
export class EventNotificationComponent {
  @Input() type: 'mandatory' | 'optional' = 'mandatory'; // Tipo do evento
  @Input() eventTitle = 'Random Event'; // Título do evento
  @Input() eventDescription = 'You need to pay $500 for car repair.'; // Descrição
  @Input() realLifeBalance = 1000; // Saldo atual
  @Input() investmentBalance = 5000; // Saldo no investimento

  transferPercentage = 0;
  transferAmount = 0;
  transactionFee = 0;
  canAcceptEvent = true;

  isVisible = false;

  ngOnInit() {
    console.log('Event Notification Component Initialized');
  }

  // Lógica para transferir valores
  updateTransferValues() {
    const total = this.realLifeBalance + this.investmentBalance;
    this.transferAmount = Math.round((this.transferPercentage / 100) * total);
    this.transactionFee = Math.round(this.transferAmount * 0.02);
  }

  // Aceitar o evento
  acceptEvent() {
    this.isVisible = false;
    // Lógica para processar o evento
  }

  // Recusar o evento
  declineEvent() {
    this.isVisible = false;
  }

  // Fechar o pop-up
  closeEvent() {
    this.isVisible = false;
  }
}
