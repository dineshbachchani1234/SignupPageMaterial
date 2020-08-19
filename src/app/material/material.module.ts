import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
const MaterialComponents=[
 
 MatIconModule,
 MatRadioModule,
 MatFormFieldModule,
 MatInputModule,
 ReactiveFormsModule,
 MatDatepickerModule,
 MatNativeDateModule,
 MatToolbarModule
 
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
