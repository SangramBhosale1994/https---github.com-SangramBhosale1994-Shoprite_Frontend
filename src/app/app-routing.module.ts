import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"about", component:AboutComponent},
  {path:"men", component:MenComponent},
  {path:"women", component:WomenComponent},
  {path:"login", component:LoginComponent},
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled',anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
