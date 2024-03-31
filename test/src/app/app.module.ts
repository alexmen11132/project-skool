import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
