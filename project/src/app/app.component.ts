import { Component } from '@angular/core';
import { LoginserviceService } from './loginservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDesign = true;
  isSignUp: boolean = true;
  constructor(private sharedDataService: LoginserviceService,private router:Router) {}
  showDesignComponent = false;
  toggleDesignComponent() {
    debugger
    this.showDesign = !this.showDesign;
    this.sharedDataService.setShowDesign(this.showDesign);
  }
  ngOnInit() {
    this.sharedDataService.getShowDesign().subscribe((value) => {
      this.showDesign = value;
    });
    // this.sharedDataService.isSignUp$.subscribe((value) => {
    //   debugger
    //   this.isSignUp = value;
    // });
  }
  navigateTocreateAccont() {
    this.router.navigate(['/createAccont']);
  }
  

}
