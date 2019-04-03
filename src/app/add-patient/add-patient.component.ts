import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import {Patient} from '../model/patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
 //objPatient: Patient=new Patient;
  newPatient: Patient=new Patient;
  firstName: String;
  lastName: String;
  age: number;
  gender: String;
  address: String;
  phone: number;
  consultedBy: String;
  complains: String;
  results: String;
  prescription: String;

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
  }

 

  openDialog(): void { 
     //this.firstName = this.firstName;
    console.log('First Name: ', this.firstName);
   
  }

  addPatient(): void {
   // this.firstName = this.firstName;
    console.log('First Name: ', this.firstName);
    // this.patientForm.value.views = 0;
   this.newPatient.firstName= this.firstName;
   this.newPatient.lastName= this.lastName;
   this.newPatient.age= this.age;
   this.newPatient.gender= this.gender;
   this.newPatient.address= this.address;
   this.newPatient.phone= this.phone;
   this.newPatient.consultedBy= this.consultedBy;
    this.newPatient.complains= this.complains;
   this.newPatient.results= this.results;
   this.newPatient.prescription= this.prescription;
    
    console.log("OUPTUTfasdfa: ",this.newPatient.firstName);
    this.patientService.addPatient(this.newPatient).subscribe((result) => {
      this.router.navigate(['/list-patients']);
    }, (err) => {
      console.log(err);
    })
  }

  
}
