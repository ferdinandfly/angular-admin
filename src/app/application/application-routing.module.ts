import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ApplicationComponent } from './application.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/application', pathMatch: 'full' },
    { path: 'application', component: ApplicationComponent, data: { title: extract('Application'), breadcrumb: extract('Application') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ApplicationRoutingModule
 {}
