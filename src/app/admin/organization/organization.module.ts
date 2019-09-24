import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {OrganizationComponent} from './organization.component';
import {OrganizationRoutingModule} from './organization-routing.module';
import {ListComponent} from './list/list.component';


@NgModule({
  declarations: [OrganizationComponent, ListComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ]
})
export class OrganizationModule {
}
