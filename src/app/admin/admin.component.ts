import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sidebarMenu: MenuNode[] = [
    {
      name: 'Administration',
      children: [
        { name: 'Organization', relativePath: '/admin/organization' },
        { name: 'Module', relativePath: '/admin/module' },
        { name: 'Datawarehouse', relativePath: '/admin/data-warehouse' },
        { name: 'Widget Type', relativePath: '/admin/widget-type' },
      ]
    }, {
      name: 'Widget',
      children: [
        { name: 'Widget', relativePath: '/admin/widget' },
        { name: 'Widget Category', relativePath: '/admin/widget-category' },
      ]
    },
    {
      name: 'Client',
      children: [
        { name: 'Organization', relativePath: '/admin/client-orgranization' },
        { name: 'User', relativePath: '/admin/client-user' },
        { name: 'Profil', relativePath: '/admin/client-profil' },
        { name: 'Group', relativePath: '/admin/client-group' },
      ]
    }
  ];
}
