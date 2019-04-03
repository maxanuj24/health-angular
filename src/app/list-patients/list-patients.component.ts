import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  patients: any = [];
  password: string="";
  ID: String="";
  id:String="";

  constructor(public patientService: PatientService, private router: Router) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
   // this.patients = [];
    // TODO: Make request to get patients and populate patients
    this.patientService.getPatients().subscribe((response) => {
      console.log(response);
      this.patients = response;})
  }

  setId(id): void {
    console.log(id);
    this.ID = id;
    console.log("ID: "+this.ID);
   this.deletePatient(id);
  }

  deletePatient(ID:String): void {
    console.log("131231   ",ID);
     console.log("password: ddafsdf ",this.password);
    if (this.password === "1234") {
      // TODO: Make request to delete patient and redirect to patient list on success
      console.log("131231danfjndkj   ",ID);
        console.log("password: ",this.password);
        this.patientService.deletePatient(ID+'');
    } else {
      // TODO: Show alert informing user of wrong password and then redirect to list of patients
          // this.patientService.deletePatient(ID+'');
   
      console.log("Else");
    }
  }

}
