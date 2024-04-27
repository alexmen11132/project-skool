import { Component } from '@angular/core';
import { ApiService } from '../../services/apiservice.service';

@Component({
  selector: 'app-ngfor1',
  templateUrl: './ngfor1.component.html',
  styleUrl: './ngfor1.component.scss'
})
export class Ngfor1Component {
  products: any

  stations1: any = [
    {name: 'from where'}
  ]

  DD1: any

  Value1(){
    return this.DD1.Value
  }

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.test1 = this.DD1

    this.apiService.getStations().subscribe((data: any) => {
      this.products = data
      console.log(this.products)
      for (let i=0; i < 3; i++){
        console.log(this.products[i])
        this.stations1.push(this.products[i])
      }
      console.log(this.DD1)
    });
  }



}
