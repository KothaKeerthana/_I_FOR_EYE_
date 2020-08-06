import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {  path:'', redirectTo:'/home', pathMatch:"full" },
  {path:'addbook',component:AddbookComponent},
  { path :'home',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
