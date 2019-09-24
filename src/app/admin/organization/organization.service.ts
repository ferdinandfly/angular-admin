import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Organization, OrganizationStatus} from '@app/admin/models/organization.interface';
import {delay} from 'rxjs/internal/operators';


const routes = {
  list: `testurl`,
  edit: (id: string) => `testurl/${id}`,
};

const ORGANIZATIONS: Organization[] = [
  {name: 'org1', status: OrganizationStatus.CLIENT},
  {name: 'org2', status: OrganizationStatus.CLIENT},
  {name: 'org3', status: OrganizationStatus.PROSPECT},
];

@Injectable({
  providedIn: 'root'
})

export class OrganizationService {

  constructor(private httpClient: HttpClient) {
  }

  // TODO: use real response
  getList(): Observable<Organization[]> {
    // return this.httpClient
    //   .cache()
    //   .get<Organization[]>(routes.list);
    return of(ORGANIZATIONS).pipe(delay(1000));
  }
}
