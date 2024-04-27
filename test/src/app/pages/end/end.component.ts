import { Component, OnInit } from '@angular/core';
import { Variables } from '../../services/variableservice.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss'],
})
export class EndComponent implements OnInit {

  InfoList: any = [
  ]

  EmailAndTelephone: any = [
  ]

  NOC: any
  VP: any
  CH: any
  CVC: any


  Email: any
  Tele: any

  constructor(private varService: Variables){
    this.InfoList = this.varService.information

    this.EmailAndTelephone = this.varService.EmailTele
  }

  ngOnInit() {

      this.InfoList = this.varService.information

      this.EmailAndTelephone = this.varService.EmailTele

      this.Email = this.EmailAndTelephone["Email"]

      console.log(this.Email)
  }
}
