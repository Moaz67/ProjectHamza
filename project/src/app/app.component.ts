import { Component } from '@angular/core';
import { LoginserviceService } from './loginservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignUp: boolean = true;
  constructor(private sharedDataService: LoginserviceService,private router:Router) {}

  ngOnInit() {
   
    // this.sharedDataService.isSignUp$.subscribe((value) => {
    //   debugger
    //   this.isSignUp = value;
    // });
  }
  navigateTocreateAccont() {
    this.router.navigate(['/createAccont']);
  }
  

}
