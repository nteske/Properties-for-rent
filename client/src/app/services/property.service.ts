import { Injectable } from '@angular/core';
import { Property } from '../model/property.model';
import { Http, Headers, Response } from '@angular/http';
import { map ,catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ErrorService } from '../services/error.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  property:Property;
  rootUrl: String = '/propertie/';
  imageURL: String = '/uploads/properties/';

  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  constructor(private http: Http, private errorService: ErrorService) { }

  changeMessage(data: number) {
    this.messageSource.next(data);
  }

  addProperty(property: Property,file1: File,file2: File,file3: File,file4: File) {
    const body = JSON.stringify(property);
    const formData: FormData = new FormData();
    formData.append('thisProp',body);
    if(file1!=null)formData.append('photo', file1,file1.name);
    if(file2!=null)formData.append('photo', file2,file2.name);
    if(file3!=null)formData.append('photo', file3,file3.name);
    if(file4!=null)formData.append('photo', file4,file4.name);
    const headers = new Headers({'Authorization': localStorage.getItem('token')});
    return this.http.post(this.rootUrl + 'add', formData, { headers: headers }).pipe(map((response: Response) => response),catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  })
);
}

saveProperty(id:string,property: Property,file1: File,file2: File,file3: File,file4: File) {
  const body = JSON.stringify(property);
  const formData: FormData = new FormData();
  formData.append('thisProp',body);
  if(file1!=null)formData.append('photo', file1,file1.name);
  if(file2!=null)formData.append('photo', file2,file2.name);
  if(file3!=null)formData.append('photo', file3,file3.name);
  if(file4!=null)formData.append('photo', file4,file4.name);
  const headers = new Headers({'Authorization': localStorage.getItem('token')});
  return this.http.patch(this.rootUrl + 'edit/'+id, formData, { headers: headers }).pipe(map((response: Response) => response),catchError((error: Response) => {
    this.errorService.handleError(error);
    return throwError(error);
})
);
}

getAllProperties(params) {
      return this.http.get(this.rootUrl +'all',params).pipe(
        map((response: Response) => {
            return response.json();
        }) ,catchError((error: Response) => {
          this.errorService.handleError(error);
          return throwError(error);
      })
  );
  }

viewProperty(id: string) {
  const headers = new Headers({'Authorization': localStorage.getItem('token') });
    return this.http.get(this.rootUrl +'view/'+ id,{headers:headers}).pipe(
        map((response: Response) => {
            return response.json();
        }) ,catchError((error: Response) => {
          this.errorService.handleError(error);
          return throwError(error);
      })
  );
  }

  deleteProperty(id:string) {
    const headers = new Headers({'Authorization': localStorage.getItem('token') });
      return this.http.delete(this.rootUrl +'delete/'+ id,{headers:headers}).pipe(
          map((response: Response) => {
              return response.json();
          }) ,catchError((error: Response) => {
            this.errorService.handleError(error);
            return throwError(error);
        })
    );
    }
getImateUrl(name:string)
{
 return this.imageURL+name;
}
/*
getImageFile(url:string)
{
  const options = { responseType: ResponseContentType.Blob};
  return this.http.get(url,options).pipe(
    map((response: Response) => {
        return response.blob();
    }) ,catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  })
);
}

new File([data], this.prop.image1,{type:data.type, lastModified: Date.now()});
*/

editProperty(id: string) {
  const headers = new Headers({'Authorization': localStorage.getItem('token') });
    return this.http.get(this.rootUrl +'edit/'+ id,{headers:headers}).pipe(
        map((response: Response) => {
            return response.json();
        }) ,catchError((error: Response) => {
          this.errorService.handleError(error);
          return throwError(error);
      })
  );
  }
}
