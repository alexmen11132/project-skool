
import { Component, OnInit } from '@angular/core';
import { Variables } from '../../services/variableservice.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent{
  NOC: any
  VP: any
  CH: any
  CVC: any

  list: any = []

  exportInfo() {
    this.list = [
      {"NOC": this.NOC},
      {"VP": this.VP},
      {"CH": this.CH},
      {"CVC": this.CVC},
    ];
    return this.list;
  }

  // Print(){
  //   console.log(this.NOC)
  //   console.log(this.VP)
  //   console.log(this.CH)
  //   console.log(this.CVC)
  //   console.log(this.exportInfo())
  //   // this.exportInfo()
  //   // console.log(this.list)
  // }

  
  Transport() {
    console.log(this.exportInfo())
    this.varService.information = this.exportInfo()
  }
  
  constructor(public varService: Variables) {
    this.Transport()
  }
}
