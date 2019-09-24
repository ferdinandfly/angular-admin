import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '@app/admin/organization/organization.service';
import {Organization} from '@app/admin/models/organization.interface';
import {delay, finalize} from 'rxjs/internal/operators';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dataSource: Organization[] | undefined;
  displayedColumns: string[] = ['name', 'status'];
  isLoading = false;

  constructor(private service: OrganizationService) { }

  ngOnInit() {
    this.isLoading = true;
    this.service
      .getList()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data) => {
        this.dataSource = data;
      })
  }

}
