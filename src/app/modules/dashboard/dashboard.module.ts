import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SharedModule } from '@@shared/shared.module';
import { MaterialModule } from '@@shared/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AccountUpdateComponent } from './account/pages/account-update/account-update.component';
// import {
//   SocketIoEchoConfig,
//   EchoService,
//   ECHO_CONFIG,
// } from 'angular-laravel-echo-fix/dist/src/services/lib.service';

// export const echoConfig: SocketIoEchoConfig = {
//   userModel: 'App.Models.User',
//   notificationNamespace: 'App\\Notifications',
//   options: {
//     broadcaster: 'socket.io',
//     host: window.location.hostname + ':6001',
//   },
// };

@NgModule({
  declarations: [AccountUpdateComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always' },
    },
    // EchoService,
    // { provide: ECHO_CONFIG, useValue: echoConfig },
  ],
})
export class DashboardModule {}
