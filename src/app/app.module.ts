import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Interceptor} from './interceptor';
import { Interceptor2} from './interceptor2'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }, // created custom header
        { provide: HTTP_INTERCEPTORS, useClass: Interceptor2, multi: true }  
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
