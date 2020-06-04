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
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { environment } from '@@env/environment';
// import { AngularLaravelEchoModule } from 'angular-laravel-echo-fix/dist';
// import { EchoConfig } from 'angular-laravel-echo-fix/dist/src/services/lib.service';
// export const echoConfig: EchoConfig = {
//   userModel: 'User',
//   notificationNamespace: 'App\\Notifications',
//   options: {
//     broadcaster: 'socket.io',
//     // key: '6a3a36d495e3fbe1deaf8bf4752ea436',
//     // wsHost: 'http://findme.test',
//     // authEndpoint: 'http://findme.test/broadcasting/auth',
//     // host: 'http://findme.test',
//     // wsPort: 6001,
//     // disableStats: true,
//     // namespace: '',
//   },
// };
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
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule,
    // AngularLaravelEchoModule.forRoot(echoConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
