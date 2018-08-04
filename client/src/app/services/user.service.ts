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
export class UserService {
  user:User;
  rootUrl: String = '/user/';
  rootImage: String = '/uploads/avatars/';
  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();
  constructor(private http: Http, private errorService: ErrorService) { }

  changeMessage(user: number) {
    this.messageSource.next(user);
  }

  changePass(user:any){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json','Authorization': localStorage.getItem('token')});
    return this.http.post(this.rootUrl + 'password', body, { headers: headers }).pipe(map((response: Response) => response),catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  })
);
}
  register(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.rootUrl + 'register', body, { headers: headers }).pipe(map((response: Response) => response),catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  })
);
}
login(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.rootUrl + 'login', body, {headers: headers})
        .pipe(map((response: Response) => response.json()),catchError((error: Response) => {
          this.errorService.handleError(error);
          return throwError(error);
      })
  );
  }

getProfile(userName: string) {
const headers = new Headers({'Authorization': localStorage.getItem('token') });
  return this.http.get(this.rootUrl +'profile/'+ userName,{headers:headers}).pipe(
      map((response: Response) => {
          return response.json();
      }) ,catchError((error: Response) => {
        this.errorService.handleError(error);
        return throwError(error);
    })
);
}

getAvatarURL(url:string){
  return this.rootImage+url;
}

getSettings() {
  const headers = new Headers({'Content-Type': 'multipart/form-data','Authorization': localStorage.getItem('token') });
    return this.http.get(this.rootUrl +'settings',{headers:headers}).pipe(
        map((response: Response) => {
            return response.json();
        }) ,catchError((error: Response) => {
          this.errorService.handleError(error);
          return throwError(error);
      })
  );
  }

  getProperties() {
    const headers = new Headers({'Content-Type': 'multipart/form-data','Authorization': localStorage.getItem('token') });
      return this.http.get(this.rootUrl +'property',{headers:headers}).pipe(
          map((response: Response) => {
              return response.json();
          }) ,catchError((error: Response) => {
            this.errorService.handleError(error);
            return throwError(error);
        })
    );
    }

  setSettings(user: User,fileToUpload: File) {
    var body = JSON.stringify(user);
    const formData: FormData = new FormData();
    if(fileToUpload!=null)formData.append('avatar', fileToUpload, fileToUpload.name);
    formData.append('thisUser',body);
    const headers = new Headers({'Authorization': localStorage.getItem('token')});
    return this.http.post(this.rootUrl + 'settings', formData, { headers: headers }).pipe(map((response: Response) => response.json()),catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  })
);
}

logout() {
  localStorage.clear();
  this.changeMessage(1);
}

isLoggedIn() {
  return localStorage.getItem('token') !== null;
}

}
