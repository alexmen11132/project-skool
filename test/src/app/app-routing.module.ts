import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TicketcheckComponent } from './pages/ticketcheck/ticketcheck.component';
import { TrainlistComponent } from './pages/trainlist/trainlist.component';
import { PassengerdataComponent } from './pages/passengerdata/passengerdata.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { EndComponent } from './pages/end/end.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'Check Ticket', component: TicketcheckComponent},
  {path: 'Trains', component: TrainlistComponent},
  {path: 'Data', component: PassengerdataComponent},
  {path: 'Payment', component: PaymentPageComponent},
  {path: 'End', component: EndComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
