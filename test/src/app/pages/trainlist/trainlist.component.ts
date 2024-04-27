import { Component } from '@angular/core';
import { Variables } from '../../services/variableservice.service';
import { Ngfor1Component } from '../../COMPONENTS/ngfor1/ngfor1.component';

@Component({
  selector: 'app-trainlist',
  templateUrl: './trainlist.component.html',
  styleUrl: './trainlist.component.scss'
})
export class TrainlistComponent {
  DDVar: any = []

  DD1: any

  DD2: any

  Visible: boolean = true

  constructor(private varService: Variables){

  }


  ngOnInit(){
    this.DDVar = this.varService.DDData

    this.DD1 = Ngfor1Component
    this.DD2 = this.DDVar["DD2"].Value

    if (this.DD1 == "თბილისი" && this.DD2 == "ბათუმი" || this.DD1 == "ბათუმი" && this.DD2 == "თბილისი"){   
      // this.Visible = true
    }else{
      // this.Visible = false
    }
  }
}
