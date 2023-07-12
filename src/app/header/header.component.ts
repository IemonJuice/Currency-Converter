import { Component ,} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  serverResponse:any;
  USD:number = 0;
  EUR:number = 0;
  PLN:number = 0;
  constructor(private httpClient:HttpClient) {
    this.httpClient.get('https://v6.exchangerate-api.com/v6/3b8022eb58970e054c2934c5/latest/UAH').subscribe(
      (response)=>{
        this.serverResponse = response
        this.USD = this.serverResponse.conversion_rates.USD;
        this.EUR = this.serverResponse.conversion_rates.EUR;
        this.PLN = this.serverResponse.conversion_rates.PLN;
      }
    )
    console.log('constructor')
  }


}
