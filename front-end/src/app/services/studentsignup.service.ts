import { Injectable } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentsignupService {

  constructor() { }

  form =new FormGroup({
    
    $key: new FormControl(null),
    indexNumber: new FormControl(''),
    fullname: new FormControl(''),
    ininame: new FormControl(''),
    address: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    school: new FormControl(''),
    grade: new FormControl(''),
    parentname: new FormControl(''),
    mobile: new FormControl(''),
    fixed: new FormControl(''),

  });
}
