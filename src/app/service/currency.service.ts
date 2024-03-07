import { Injectable, computed, signal } from '@angular/core';

interface Currency {
  code: string;
  symbol: string;
}

type ExchangeRates = Record<Currency['code'], number>;

const DEFAULT_CURRENCIES  = [
  { code: 'USD', symbol: '$' },
  { code: 'GBP', symbol: '£' },
  { code: 'EUR', symbol: '€' },
];

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  readonly currencies = signal<Currency[]>(DEFAULT_CURRENCIES)
  // currentCurrency = signal<Currency>(DEFAULT_CURRENCIES[0])
  
  // asReadnly() example same idea to Subject where we hide the logic
  private _currentCurrency = signal<Currency>(DEFAULT_CURRENCIES[0])
  readonly currentCurrency = this._currentCurrency.asReadonly()

  readonly exchangeRates = signal<ExchangeRates>({
    EUR: 1.14,
    GBP: 1.31,
    USD: 1,
  });

  readonly exchangeRate = computed<number>(() => this.exchangeRates()[this.currentCurrency().code])

  setCurrency(currecyCode: Currency['code']): void {
    console.log(currecyCode)
    const newCurrency = this.currencies().find((currency) => currency.code === currecyCode)
    // if (newCurrency) this.currentCurrency.set(newCurrency)

    if (newCurrency) this._currentCurrency.set(newCurrency)

  }
}
