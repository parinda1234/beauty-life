import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { PricesComponent } from './prices/prices.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { StartupComponent } from './startup/startup.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PricesComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    LoginComponent,
    AppoinmentComponent,
    ChatBoxComponent,
    StartupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

