import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, MatSidenavModule,
    SharedModule, AdminRoutingModule],
  declarations: [AdminComponent]
})
export class AdminModule { }
