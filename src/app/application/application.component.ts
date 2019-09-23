import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sidebarMenu: MenuNode[] = [
    {
      name: 'Catertories',
      children: [
        { name: 'no category', relativePath: '/application/no-category' },
        { name: 'category 1', relativePath: '/application/category-1' },
        { name: 'category 2', relativePath: '/application/category-2' },
        { name: 'category 3', relativePath: '/application/category-3' },
      ]
    }
  ];
}
