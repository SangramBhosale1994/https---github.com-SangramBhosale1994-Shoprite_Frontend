import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  women: any;
  formdata: any;
  baseurl = this.api.baseurl;

  constructor(private api:ApiService, private http:HttpClient) { }

  ngOnInit(): void {
    this.list();
  }
  
  totalLength: any;
  page: number = 1;

  list() {
    this.api.post("admin/womens", { data: {} }).subscribe((mydata: any) => {
      this.women = mydata.data;
      this.totalLength = mydata.length;
      console.log(this.women);
    });
  }


  delete(id: string): void {
    if (confirm("Delete The Data?")) {
      let data = { id: id };
      this.api.post("admin/deletewomen", { data: data }).subscribe(mydata => {
        this.list();
      });
    }
  }
}
