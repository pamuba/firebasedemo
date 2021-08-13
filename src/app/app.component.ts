import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public crudservice:CrudService){}

  title = 'firebasedemo';

  employee:any;
  employeeName:string;
  employeeAge:string;
  employeeAddress:string;
  message:string;

  CreateRecord(){
    let Record = {}
    Record['name'] = this.employeeName
    Record['age'] = this.employeeAge
    Record['address'] = this.employeeAddress

    this.crudservice.create_NewEmployee(Record).then(res=>{
      this.employeeName = ''
      this.employeeAge = ''
      this.employeeAddress = ''
      console.log(res)
      this.message = "Employee Data Saved"
    }).catch(err=>console.log(err))
  }
}
