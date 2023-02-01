import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  StudentArray : any[] = [];
  currentStudentID = "";

  name: string ="";
  address: string ="";
  phone: string ="";
  username: string ="";
  password: string ="";
  
  
  constructor(private http: HttpClient, private router: Router) 
  {
    this.getAllStudent();
  }
  getAllStudent() {

    this.http.get("http://localhost:3000/user/getAll")
    .subscribe((resultData: any)=>
    {
       
        console.log(resultData);
        this.StudentArray = resultData.data;
    });


  }

  setUpdate(data: any) 
  {
   this.name = data.name;
   this.address = data.address;
   this.phone = data.phone;
   this.username = data.username;
   this.password = data.password;

   this.currentStudentID = data._id;
  
  }

  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone,
      "username":this.username,
      "password":this.password,


    };
    
    this.http.patch("http://localhost:3000/user/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert(" Updateddd")
        this.getAllStudent();
      
    });
  }
  
  setDelete(data: any) {
    this.http.delete("http://localhost:3000/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert(" Deletedddd")
        this.getAllStudent();
   
    });
    }
    
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       

  }

register()
  {

    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "phone":this.phone,
      "username" : this.username, 
      "password" : this.password, 

  };
    this.http.post("http://localhost:3000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert(" Registered Successfully")
        this.router.navigate(['login']);
         //this.getAllEmployee();
        this.name = '';
        this.address = '';
        this.phone  = '';
        this.username  = '';
        this.password  = '';
        this.getAllStudent();
    });
  }
}