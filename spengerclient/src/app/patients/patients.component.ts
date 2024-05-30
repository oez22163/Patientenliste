import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Patient } from '../models/Patient';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent implements OnInit {
  constructor(private service: DataService) { }
  patientArr$: Patient[] = [];
  selectedPatient:Patient = new Patient();
  ngOnInit(): void {
    this.getPatient();
  }
  getPatient(){
    this.service.getPatients()
    .subscribe((data:Patient[]) =>{
      console.log(data);
      this.patientArr$ = data
    })
  }
  selectPatient(selected:Patient){ 
    console.log("clicked Patient" + selected.id); 
    this.selectedPatient=selected;
  } 
}
  
