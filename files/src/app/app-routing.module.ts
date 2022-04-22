import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadernavComponent } from './headernav/headernav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'headernav',component:HeadernavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
