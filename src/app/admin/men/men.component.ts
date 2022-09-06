import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  men:any;
  formdata:any;
  baseurl = this.api.baseurl;

  constructor(private api:ApiService, private http:HttpClient ) {}

  ngOnInit(): void {
    this.list();
  }

  totalLength: any;
  page: number = 1;

  list(){
    this.api.post("admin/mens", {data:{}}).subscribe((mydata:any)=>{
      this.men = mydata.data;
      this.totalLength = mydata.length;
      console.log(this.men);
    });
  }

  
  delete(id: string): void {
    if (confirm("Delete The Data?")) {
      let data = { id: id };
      this.api.post("admin/deletemen", { data: data }).subscribe(mydata => {
        this.list();
      });

    }
  }

}
