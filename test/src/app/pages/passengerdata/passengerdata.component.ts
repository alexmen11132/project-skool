import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../COMPONENTS/card/card.component';
import { Variables } from '../../services/variableservice.service';

@Component({
  selector: 'app-passengerdata',
  templateUrl: './passengerdata.component.html',
  styleUrl: './passengerdata.component.scss'
})
export class PassengerdataComponent implements OnInit {

  CL() {
    console.log("###############################")
  }

  liste: any = [
  ]

  listInformation: any = [

  ]





  timeStart: any

  timeEnd: any






  Email: any

  Telephone: any

  NumberOfPassengers: any


  GenList(){
    this.liste = [
      {"Email": this.Email},
      {"Tele": this.Telephone},
    ]

    return this.liste
  }

  
  Sub(){
    console.log(this.GenList())
    this.varService.EmailTele = this.GenList()
  }

  constructor(public varService: Variables){
    this.Sub()
    
    this.timeStart = varService.timeStart
    this.timeEnd = varService.timeEnd
  }



  ngOnInit() {
    this.NumberOfPassengers = this.varService.NOP
    console.log(this.NumberOfPassengers)
    console.log(this.varService.NOP)
    for(let i=1; i < this.NumberOfPassengers+1; i++){
      this.listInformation.push({'id':i})
      console.log(i)
    }
    console.log(this.listInformation)




    this.timeStart = this.varService.timeStart.valueOf()
    this.timeEnd = this.varService.timeEnd.valueOf()


    console.log(this.timeStart)
    console.log(this.timeEnd)
  }
}
