import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { ResultComponent } from './components/result/result.component';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'result',component:ResultComponent},
  {path:'**',redirectTo:'signup',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
