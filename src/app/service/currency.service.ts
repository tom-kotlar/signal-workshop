import { Injectable, signal } from '@angular/core';

interface Currency {
  code: string;
  symbol: string;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  readonly currencies = signal<Currency[]>([
    { code: 'USD', symbol: '$' },
    { code: 'GBP', symbol: '£' },
    { code: 'EUR', symbol: '€' },
  ]);

  constructor() { }
}
