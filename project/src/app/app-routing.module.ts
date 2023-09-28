import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { DesignComponent } from './design/design.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent, 
    children: [
      { path: '', component: DesignComponent }, 
    ],
  },
  {
    path: 'createAccont',
    component: HeaderComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




  
