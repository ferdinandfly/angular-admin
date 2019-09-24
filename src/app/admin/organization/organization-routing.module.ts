import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { OrganizationComponent } from './organization.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '',
        component: OrganizationComponent,
        data: { title: extract('Organization'), breadcrumb: extract('Organization') },
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            {
                path: 'list', component: ListComponent,
                data: { title: extract('List'), breadcrumb: extract('List') },
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class OrganizationRoutingModule { }
