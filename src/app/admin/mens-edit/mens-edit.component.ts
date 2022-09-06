import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-mens-edit',
  templateUrl: './mens-edit.component.html',
  styleUrls: ['./mens-edit.component.css']
})
export class MensEditComponent implements OnInit {

  men: any;
  formdata: any;
  photo = "";
  id: string | null = "";
  submitted = false;

  constructor(private api:ApiService, private router:Router, private route:ActivatedRoute, private formbuilder:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.api.post("admin/men", { data: { id: this.id } }).subscribe((result: any) => {
        this.men = result.data;
        this.load();
      })
    }
    this.load();

  };

  load() {

    this.formdata = new FormGroup({
      id: new FormControl(this.id),
      photo: new FormControl("", Validators.compose([])),
      name: new FormControl(this.men == null ? "" : this.men.name, Validators.compose([Validators.required, Validators.minLength(4)])),
      brand: new FormControl(this.men == null ? "" : this.men.brand, Validators.compose([Validators.required, Validators.minLength(4)])),
      description: new FormControl(this.men == null ? "" : this.men.description, Validators.compose([Validators.required, Validators.minLength(4)])),
      price: new FormControl(this.men == null ? "" : this.men.price, Validators.compose([Validators.required, Validators.minLength(2)])),
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
    this.api.post("admin/savemen", data).subscribe((result) => {
      console.log(result);
      this.router.navigate(['../admin/men']);
    });

  };

};
