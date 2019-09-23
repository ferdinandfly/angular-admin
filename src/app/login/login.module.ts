import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgbModule, LoginRoutingModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [LoginComponent,LostPasswordComponent]
})
export class LoginModule {}
