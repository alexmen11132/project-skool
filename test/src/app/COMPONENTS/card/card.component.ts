import { Component } from '@angular/core';
import { Variables } from '../../services/variableservice.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

    products: any
    
    date: any 

    NoP: any

    DD1: any

    DD2: any

    variables: any = []

    alerti!: any
    // static Submit: any;

    Value() {
        return this.NoP
    }

    constructor(public varService: Variables){
    }
    Submit(){
        if (this.DD1 == undefined || this.DD2 == undefined || this.NoP == undefined || this.date == undefined){
            alert('fill the boxes')
        }
        if (this.DD1 != undefined && this.DD2 != undefined && this.NoP != undefined && this.date != undefined){
            return
        }
        this.varService.NOP = this.NoP
        this.varService.DDData = [{"DD1":this.DD1},{"DD2":this.DD2}]
    }
}
