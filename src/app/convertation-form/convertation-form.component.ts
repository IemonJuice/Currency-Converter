import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-convertation-form',
  templateUrl: './convertation-form.component.html',
  styleUrls: ['./convertation-form.component.css']
})
export class ConvertationFormComponent {
  serverResponse: any;
  toCurrencyName: string = '';
  fromCurrencyName: string = '';
  currencyValue1: number = 1;
  currencyValue2: number = this.currencyValue1 / 10;

  constructor(private httpClient: HttpClient) {

  }

  changeCurrency2() {
    try {
      if (this.toCurrencyName === 'Currency' || this.fromCurrencyName === "Currency") {
        alert("Choose all currencies")
      } else {
        this.currencyValue2 = this.currencyValue1 * this.serverResponse.conversion_rates[this.toCurrencyName];
      }
    } catch {
      alert('Choose all currencies!')
    }
  }

  changeCurrency1() {
    try {
      if (this.toCurrencyName === 'Currency' || this.fromCurrencyName === "Currency") {
        alert('Choose all currencies!')
      } else {
        this.currencyValue1 = this.currencyValue2 / this.serverResponse.conversion_rates[this.toCurrencyName];
      }
    } catch {
      alert('Choose all currencies!')
    }

  }

  getCurrencyToData(arg: string) {
    this.toCurrencyName = arg;
    this.currencyValue1 = 0;
    this.currencyValue2 = 0;
  }

  getCurrencyFromData(arg: string) {

    this.fromCurrencyName = arg;
    try {
      this.httpClient.get(`https://v6.exchangerate-api.com/v6/3b8022eb58970e054c2934c5/latest/${this.fromCurrencyName}`).subscribe(
        response => this.serverResponse = response
      )
      this.currencyValue1 = 0;
      this.currencyValue2 = 0;
    } catch {
      alert('something went wrong. make sure you choose currencies correctly')
    }

  }

}
