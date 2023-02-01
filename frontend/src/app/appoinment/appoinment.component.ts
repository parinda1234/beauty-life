import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.scss']
})
export class AppoinmentComponent {
  Array : any[] = [];
  BID = "";
  
  username: string ="";
  pnum: string ="";
  srvce: string ="";
  prsn: string = "";
  Addate: string ="";  
  
  
  constructor(private http: HttpClient )
  {
    this.get();
  }
  
  get()
  {
    this.http.get("http://localhost:3000/appoinment/getAll")   
    .subscribe((result: any)=>
    {
        console.log(result);
        this.Array = result.data;
    });
  }
  
  setUp(data: any)
  {
    this.username = data.username;
    this.pnum = data.pnum;
    this.srvce = data.srvce;
    this.prsn = data.prsn;
    this.Addate = data.Addate;
    
  
    this.BID = data._id;
  }
  
  save()
  {
    if(this.BID == '')
    {
        this.addfunc();
    }
  }
  
  addfunc()   
  {
    let BData =
    {
      "username" : this.username,
      "pnum" : this.pnum,
      "srvce" : this.srvce,
      "prsn" : this.prsn,
      "Addate" : this.Addate,
      
    };
    this.http.post("http://localhost:3000/appoinment/create",BData).subscribe((restData: any)=>    
    {
        console.log(restData);
        alert("Booking Successfully Added...!")
        this.username = '';
        this.pnum = '';
        this.srvce = '';
        this.prsn = '';
        this.Addate  = '';
        
        this.get();
  
  
    });
  
  }

}
