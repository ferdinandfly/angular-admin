import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, ApplicationRoutingModule, MatSidenavModule],
  declarations: [ApplicationComponent]
})
export class ApplicationModule { }
