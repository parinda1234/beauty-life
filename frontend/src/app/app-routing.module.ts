import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PricesComponent } from './prices/prices.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { StartupComponent } from './startup/startup.component';



const routes: Routes = [
  {path :'register',component :RegisterComponent},
  {path :'prices',component :PricesComponent},
  {path :'home',component :HomeComponent},
  {path :'contact',component :ContactComponent},
  {path :'services',component :ServicesComponent},
  {path :'login',component :LoginComponent},
  {path :'appoinment',component :AppoinmentComponent},
  {path :'chat-box',component :ChatBoxComponent},
  {path : '',component :StartupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
