import { Component, OnInit } from '@angular/core';
//putanje
import { Router } from '@angular/router';
//servisi
import { ErrorService } from '../../services/error.service';
import { ToastrService } from 'ngx-toastr';
//modeli
import { Error } from '../../model/error.model';

@Component({
  selector: 'app-error',
  template: ``,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor(private router: Router,private errorService: ErrorService,private toastr: ToastrService) { }

  ngOnInit() {
    this.errorService.errorOccurred
    .subscribe(
        (error: Error) => {
          /************Rukovanje pristiglim greskama************/
          let msg=error.message;
          let status=parseInt(error.title);
          if(status==0)msg="Failed to connect to server";
          if(status==401) {this.router.navigate(['/users/login']);
          msg="Please login first!";
        }
          if(status==403||status==500) this.router.navigate(['/']);
          if(status==422&&msg=="Property not found") this.router.navigate(['/not-found']);
          this.toastr.error(msg,"Error",{
            closeButton:true,
            positionClass:'toast-bottom-right'
          });
        }
    );
  }

}
