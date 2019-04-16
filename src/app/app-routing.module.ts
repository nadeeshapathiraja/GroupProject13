import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupUsersTypeComponent } from './Componets/signup-users-type/signup-users-type.component';
import { DashbordComponent } from './Componets/dashbord/dashbord.component';
import { SigninComponent } from './Componets/signin/signin.component';
import { AdminComponent } from './Componets/admin/admin.component';
import { PoolmanagerComponent } from './Componets/poolmanager/poolmanager.component';
import { StudentsComponent } from './Componets/students/students.component';
import { CoachComponent } from './Componets/coach/coach.component';
import { StudentSignupComponent } from './Componets/student-signup/student-signup.component';
import { CoachSignupComponent } from './Componets/coach-signup/coach-signup.component';
import { PoolmanagerSignupComponent } from './Componets/poolmanager-signup/poolmanager-signup.component';
import { EventsComponent } from './Componets/events/events.component';


const routes: Routes = [
{
  path: '',
  redirectTo: 'dashboard', 
  pathMatch:'full'
},

{
  path: 'register',
  component: SignupUsersTypeComponent
},

{
  path: 'signin',
  component: SigninComponent
},

{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'poolmanager',
  component: PoolmanagerComponent
},
{
  path: 'student',
  component: StudentsComponent
},
{
  path: 'coach',
  component: CoachComponent
},
{
  path: 'studentsignup',
  component: StudentSignupComponent
},
{
  path: 'events',
  component: EventsComponent
},

{
  path: 'coachsignup',
  component: CoachSignupComponent
},
{
  path: 'poolmanagersignup',
  component: PoolmanagerSignupComponent
},

{
  path:'dashboard',
  component: DashbordComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { 
  
}
