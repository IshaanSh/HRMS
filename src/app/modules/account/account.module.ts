import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { GoogleComponent } from './google/google.component';
import { AuthformComponent } from './authform/authform.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { MatCarouselModule } from 'ng-mat-carousel';

@NgModule({
  declarations: [
    AccountComponent,
    AuthformComponent,
    GoogleComponent

  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCarouselModule
  ]
})
export class AccountModule { }
