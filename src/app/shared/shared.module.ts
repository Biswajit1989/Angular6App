import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FmsTextPipe } from './pipes/fms-text.pipe';
import { CheckboxlistsComponent } from './components/checkboxlists/checkboxlists.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  declarations: [FmsTextPipe, CheckboxlistsComponent],
  exports: [
    FmsTextPipe,
    CheckboxlistsComponent
  ]
})
export class SharedModule { }
