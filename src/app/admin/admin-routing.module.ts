import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { MenComponent } from "./men/men.component";
import { WomenComponent } from "./women/women.component";
import { MensEditComponent } from './mens-edit/mens-edit.component';
import { WomenEditComponent } from './women-edit/women-edit.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "men", component: MenComponent },
  { path: "women", component: WomenComponent },
  { path: "mens-edit", component: MensEditComponent},
  { path: "mens-edit/:id", component: MensEditComponent},
  { path: "women-edit", component: WomenEditComponent},
  { path: "women-edit/:id",component: WomenEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
