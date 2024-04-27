import { Component } from '@angular/core';
import { ApiService } from '../../services/apiservice.service';


@Component({
  selector: 'app-ngfor2',
  templateUrl: './ngfor2.component.html',
  styleUrl: './ngfor2.component.scss'
})
export class Ngfor2Component {
  products: any

  stations2: any = [
    {name: 'from where'}
  ]

  DD2: any

  Value2(){
    return this.DD2.Value
  }

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.test2 = this.DD2

    this.apiService.getStations().subscribe((data: any) => {
      this.products = data
      console.log(this.products)
      for (let i=0; i < 3; i++){
        console.log(this.products[i])
        this.stations2.push(this.products[i])
      }
      console.log(this.stations2)
    });
  }
}
