import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SharedModule } from '@@shared/shared.module';
import { MaterialModule } from '@@shared/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ItemsModule } from './items/items.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ItemsModule,
  ],
  exports: [ItemsModule],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always' },
    },
  ],
})
export class DashboardModule {}
