import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { AdminComponent } from './admin.component';

import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { 
      path: 'admin', 
      component: AdminComponent, 
      data: { title: extract('Administration'), 
      breadcrumb: extract('Administration') } ,
      children: [
       {  
         path: 'organization',
         loadChildren: () => import(`./organization/organization.module`).then(m => m.OrganizationModule),
        } 
      ]
  },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
