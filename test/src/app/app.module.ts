import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './COMPONENTS/Header/test.component';
import { BodyComponent } from './COMPONENTS/bodyHP/body.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TicketcheckComponent } from './pages/ticketcheck/ticketcheck.component';
import { TrainlistComponent } from './pages/trainlist/trainlist.component';
import { PassengerdataComponent } from './pages/passengerdata/passengerdata.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';

import { EndComponent } from './pages/end/end.component';

import { PhoneHeaderComponent } from './COMPONENTS/phone-header/phone-header.component';
import { PhoneFooterComponent } from './COMPONENTS/phone-footer/phone-footer.component';
import { PhoneBodyComponent } from './COMPONENTS/phone-body/phone-body.component';
import { PhoneNavbarComponent } from './COMPONENTS/phone-navbar/phone-navbar.component';
import { CardComponent } from './COMPONENTS/card/card.component';
import { Ngfor1Component } from './COMPONENTS/ngfor1/ngfor1.component';
import { Ngfor2Component } from './COMPONENTS/ngfor2/ngfor2.component';
// import { ApiService } from './services/apiservice.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BodyComponent,
    FooterComponent,
    HomepageComponent,
    TicketcheckComponent,
    TrainlistComponent,
    PassengerdataComponent,
    NavbarComponent,
    PaymentPageComponent,
    EndComponent,
    PhoneHeaderComponent,
    PhoneFooterComponent,
    PhoneBodyComponent,
    PhoneNavbarComponent,
    CardComponent,
    Ngfor1Component,
    Ngfor2Component
    // ApiService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
