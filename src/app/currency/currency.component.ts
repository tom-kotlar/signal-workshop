import { Component, OnInit, inject } from '@angular/core';
import { CurrencySwitcherComponent } from '../currency-switcher/currency-switcher.component';
import { CurrencyService } from '../service/currency.service';
import { DecimalPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  standalone: true,
  imports: [CurrencySwitcherComponent, JsonPipe, DecimalPipe],
})
export class CurrencyComponent implements OnInit{
 
  currencyService = inject(CurrencyService);

  priceInUsd = 10;

  ngOnInit(): void {
   console.log(this.currencyService.currentCurrency().code)
  }

}
