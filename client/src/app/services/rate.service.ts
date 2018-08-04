import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Http, Headers, Response } from '@angular/http';
import { map ,catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ErrorService } from '../services/error.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RateService {
  user:User;
  rootUrl: String = '/ratings/';
  constructor(private http: Http, private errorService: ErrorService) { }

  getStars(id:string) {
    const headers = new Headers({'Authorization': localStorage.getItem('token') });
      return this.http.get(this.rootUrl +'stared/'+id,{headers:headers}).pipe(
          map((response: Response) => {
              return response.json();
          }) ,catchError((error: Response) => {
            this.errorService.handleError(error);
            return throwError(error);
        })
    );
    }

    postStars(star:any) {
      const headers = new Headers({'Content-Type': 'application/json','Authorization': localStorage.getItem('token') });
      const body = JSON.stringify(star);
        return this.http.post(this.rootUrl +'change',body,{headers:headers}).pipe(
            map((response: Response) => {
                return response;
            }) ,catchError((error: Response) => {
              this.errorService.handleError(error);
              return throwError(error);
          })
      );
      }
}
