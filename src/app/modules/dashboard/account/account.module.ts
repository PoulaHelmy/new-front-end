import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialModule } from 'app/@shared/material/material.module';
import { SharedModule } from '@@shared/shared.module';

import { AccountRoutingModule } from './account-routing.module';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';

@NgModule({
  declarations: [AccountDetailsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AccountModule {}
