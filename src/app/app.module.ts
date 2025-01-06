import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateModalComponent } from './update-modal/update-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientListComponent } from './patient-list/patient-list.component';
import { MobileNumberPipe } from './pipe/mobile-number.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UpdateModalComponent,
   
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MobileNumberPipe,   // Declare the pipe
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
