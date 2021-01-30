import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../../data/user";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAllRoles() : Observable<Role[]> {
    return this.http.get<Role[]>(environment.serverUrl('/roles'))
  }
}
