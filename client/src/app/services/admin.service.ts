import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Http, Headers, Response } from '@angular/http';
import { map ,catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ErrorService } from '../services/error.service';
import { Property } from '../model/property.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  user:User;
  rootUrl: String = '/admins/';


  constructor(private http: Http, private errorService: ErrorService) { }

  getUsers() {
    const headers = new Headers({'Authorization': localStorage.getItem('token') });
      return this.http.get(this.rootUrl +'users',{headers:headers}).pipe(
          map((response: Response) => {
              return response.json();
          }) ,catchError((error: Response) => {
            this.errorService.handleError(error);
            return throwError(error);
        })
    );
    }

    setData(user:User) {
      var body = JSON.stringify(user);
      const headers = new Headers({'Content-Type': 'application/json','Authorization': localStorage.getItem('token') });
        return this.http.patch(this.rootUrl +'admin',body,{headers:headers}).pipe(
            map((response: Response) => {
                return response;
            }) ,catchError((error: Response) => {
              this.errorService.handleError(error);
              return throwError(error);
          })
      );
      }

      setBan(user:User) {
        var body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json','Authorization': localStorage.getItem('token') });
          return this.http.patch(this.rootUrl +'ban',body,{headers:headers}).pipe(
              map((response: Response) => {
                  return response;
              }) ,catchError((error: Response) => {
                this.errorService.handleError(error);
                return throwError(error);
            })
        );
        }

        deleteProp(prop:Property) {
          var body = JSON.stringify(prop);
          const headers = new Headers({'Content-Type': 'application/json','Authorization': localStorage.getItem('token') });
            return this.http.post(this.rootUrl +'delete',body,{headers:headers}).pipe(
                map((response: Response) => {
                    return response;
                }) ,catchError((error: Response) => {
                  this.errorService.handleError(error);
                  return throwError(error);
              })
          );
          }
    getPropeties() {
      const headers = new Headers({'Authorization': localStorage.getItem('token') });
        return this.http.get(this.rootUrl +'properties',{headers:headers}).pipe(
            map((response: Response) => {
                return response.json();
            }) ,catchError((error: Response) => {
              this.errorService.handleError(error);
              return throwError(error);
          })
      );
      }
}
