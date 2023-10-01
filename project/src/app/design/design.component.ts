import { Component } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {
  showDesign = false;
  constructor(private sharedataservice: LoginserviceService) {}

}
