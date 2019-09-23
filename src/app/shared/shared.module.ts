import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatTreeModule, MatIconModule,RouterModule],
  declarations: [LoaderComponent, SidebarComponent],
  exports: [LoaderComponent, SidebarComponent]
})
export class SharedModule { }
