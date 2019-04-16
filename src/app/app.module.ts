import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './Componets/students/students.component';
import { DashbordComponent } from './Componets/dashbord/dashbord.component';
import { SignupComponent } from './Componets/signup/signup.component';
import { AdminComponent } from './Componets/admin/admin.component';
import { CoachComponent } from './Componets/coach/coach.component';
import { PoolmanagerComponent } from './Componets/poolmanager/poolmanager.component';
import { StudentSignupComponent } from './Componets/student-signup/student-signup.component';
import { SignupUsersTypeComponent } from './Componets/signup-users-type/signup-users-type.component';
import { SigninComponent } from './Componets/signin/signin.component';

import { CalendarModule } from 'angular-calendar';
import { SkillComponent } from './Componets/skill/skill.component';
import { from } from 'rxjs';
import { StudentsignupService } from './services/studentsignup.service';
import { UsersnotvalidComponent } from './usersnotvalid/usersnotvalid.component';
import { CoachSignupComponent } from './Componets/coach-signup/coach-signup.component';
import { PoolmanagerSignupComponent } from './Componets/poolmanager-signup/poolmanager-signup.component';
import { EventsComponent } from './Componets/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DashbordComponent,
    SignupComponent,
    AdminComponent,
    CoachComponent,
    PoolmanagerComponent,
    StudentSignupComponent,
    SignupUsersTypeComponent,
    SigninComponent,
    SkillComponent,
    UsersnotvalidComponent,
    CoachSignupComponent,
    PoolmanagerSignupComponent,
    EventsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    
    

  ],
  providers: [StudentsignupService],
  bootstrap: [AppComponent]
})

export class AppModule { }
