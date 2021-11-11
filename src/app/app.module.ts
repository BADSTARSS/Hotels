import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {CrudService} from './service/crud.service';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { RegisterComponent } from './register/register.component';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
import { HotelComponent } from './hotel/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookingComponent,
    BookinghistoryComponent,
    CancelbookingComponent,
    HomeComponent,
    LoginComponent,
    PaymentComponent,
    ReceiptComponent,
    RegisterComponent,
    RoomdetailComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule


    
    
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
