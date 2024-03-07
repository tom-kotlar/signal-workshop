import { Component, inject } from '@angular/core';
import { CurrencyService } from '../service/currency.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.scss'], 
  standalone: true,
  imports: [FormsModule]
})
export class CurrencySwitcherComponent {
  currencyService = inject(CurrencyService);

  // if we use FormsModule
  selectedCurrency = this.currencyService.currentCurrency().code
}
