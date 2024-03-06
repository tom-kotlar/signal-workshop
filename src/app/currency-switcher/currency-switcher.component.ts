import { Component, inject } from '@angular/core';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.scss']
})
export class CurrencySwitcherComponent {
  currencyService = inject(CurrencyService);
}
