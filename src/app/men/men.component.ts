import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  men:any;;
  baseurl = this.api.baseurl;
  formdata:any;

  constructor(private api:ApiService, private http:HttpClient) { }

  ngOnInit(): void {
    this.list()
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
}
