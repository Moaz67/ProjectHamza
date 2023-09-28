import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route:Router,private sharedDataService:LoginserviceService){}
/*log:boolean=true
login(){
  debugger
this.route.navigate(['createAccont'])
this.log=true
}
handleSignUp(isSignUp: boolean) {
  
  this.sharedDataService.setSignUpValue(isSignUp);
}
*/
}