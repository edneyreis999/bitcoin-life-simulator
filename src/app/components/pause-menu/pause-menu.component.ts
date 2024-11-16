import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pause-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pause-menu.component.html',
  styleUrl: './pause-menu.component.scss',
})
export class PauseMenuComponent {
  @Input() realLifeBalance = 10000; // Exemplo
  @Input() investmentBalance = 0; // Exemplo

  isVisible = false;
  transferPercentage = 50; // Slider começa no meio
  transferAmount = 0;
  transactionFee = 0;

  openMenu() {
    this.isVisible = true;
  }

  closeMenu() {
    this.isVisible = false;
  }

  updateTransferValues() {
    const total = this.realLifeBalance + this.investmentBalance;
    this.transferAmount = Math.round((this.transferPercentage / 100) * total);
    this.transactionFee = Math.round(this.transferAmount * 0.02); // Ex.: 2% de taxa
  }
}
