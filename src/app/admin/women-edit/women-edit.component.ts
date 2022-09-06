import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-women-edit',
  templateUrl: './women-edit.component.html',
  styleUrls: ['./women-edit.component.css']
})
export class WomenEditComponent implements OnInit {

  women: any;
  formdata: any;
  photo = "";
  id: string | null = "";
  submitted = false;

  constructor(private api:ApiService, private http:HttpClient, private router:Router,private route:ActivatedRoute, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.api.post("admin/women", { data: { id: this.id } }).subscribe((result: any) => {
        this.women = result.data;
        this.load();
      })
    }
    this.load();

  };

  load() {

    this.formdata = new FormGroup({
      id: new FormControl(this.id),
      photo: new FormControl("", Validators.compose([Validators.required])),
      name: new FormControl(this.women == null ? "" : this.women.name, Validators.compose([Validators.required, Validators.minLength(4)])),
      brand: new FormControl(this.women == null ? "" : this.women.brand, Validators.compose([Validators.required, Validators.minLength(4)])),
      description: new FormControl(this.women == null ? "" : this.women.description, Validators.compose([Validators.required, Validators.minLength(4)])),
      price: new FormControl(this.women == null ? "" : this.women.price, Validators.compose([Validators.required, Validators.minLength(2)])),
    })
  }

  handleimage(event: Event) {
    let ctrl = <HTMLInputElement>event.target;
    if (ctrl != null && ctrl.files != null) {
      const file = ctrl.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result != null) {
          this.photo = reader.result.toString();
        }
      }
    }
  }

  submit(formdata: any) {
    console.log(formdata);
    formdata.photo = this.photo;
    let data = { data: formdata };
    console.log(data)
    this.api.post("admin/savewomen", data).subscribe((result) => {
      console.log(result);
      this.router.navigate(['../admin/women']);
    });

  };
  }

  


