import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from '@@shared/shared.module';
import { AuthModule } from 'app/@auth/auth.module';

import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '@@env/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    NgbModule,
    ToastrModule.forRoot(), // ToastrModule added
    SharedModule,
    AuthModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
