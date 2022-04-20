import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from './interface/coin';

@Component({
  selector: 'app-coinmaket',
  templateUrl: './coinmaket.component.html',
  styleUrls: ['./coinmaket.component.scss']
})
export class CoinmaketComponent implements OnInit {

  //url de api.coingecko.com
  api: string =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

  //Data del Chart 
  displayedColumns: Coin[] = [];
  coins: Coin[] = [];
  titles: string[] = ['#', 'Coin', 'Price', 'Price Change', '24H Volume'];
  
 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // trabajo con la api (Pasa a un servicio recordar)
    this.http.get<Coin[]>(this.api).subscribe(
      (res) => {
        this.coins = res;
        this.filteredCoints = this.coins;
      },
      (err) => console.error(err)
    );
  }

  //metodo de busqueda
    searchText: string = '';
    filteredCoints: Coin[] = [];
  searchCoin() {
    this.filteredCoints = this.coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
