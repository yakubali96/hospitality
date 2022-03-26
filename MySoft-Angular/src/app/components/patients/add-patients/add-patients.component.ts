import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddPatients } from './add-patients';

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.css']
})
export class AddPatientsComponent implements OnInit {
  fileToUpload1: any;
  fileToUpload2: any;
  fileToUpload: any;
  isSave: boolean = true;
  patients = new AddPatients();
  constructor(private route: Router, private http: HttpClient,) { }


  ngOnInit(): void {
    if (history.state.isSave != undefined) {
      this.patients = history.state.pat
      this.isSave = history.state.isSave
     
      console.log(history.state.custo.cname);
  }
}
  fileChange(files: any) {
    //debugger;
    this.fileToUpload1 = files.files[0]
    this.fileToUpload2 = files.files[1]


  }

  // fileChange(files: any) {
  //   debugger;
  //   this.fileToUpload = files.files[0]


  // }


  savePatient() {
    console.log(121);
   // debugger;
    const formData: FormData = new FormData();
    formData.append('files', this.fileToUpload1, this.fileToUpload1?.name);
    formData.append('files', this.fileToUpload2, this.fileToUpload2?.name);
    // formData.append('file', this.fileToUpload, this.fileToUpload?.name);
    console.log(this.fileToUpload);
   

    const headers = { 'content-type': 'application/json' };
    this.http.post<any>("http://localhost:8082/patient/save", JSON.stringify(this.patients), { headers: headers })
      .subscribe(data => {
        alert("New Patient Added Successfull")
        this.patients = new AddPatients();
        this.isSave = true
      }, err => {
        alert("Patients already exist")
      }
      )
  }
  updatePatient() {

  }


}
