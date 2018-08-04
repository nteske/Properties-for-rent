import { EventEmitter,Injectable } from '@angular/core';
import {Error} from '../model/error.model'
@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errorOccurred = new EventEmitter<Error>();

  handleError(error: any) {
      const errorData = new Error(error.status,error._body);
      this.errorOccurred.emit(errorData);
  }
}
