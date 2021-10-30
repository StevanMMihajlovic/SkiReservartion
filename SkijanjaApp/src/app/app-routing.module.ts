import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "skiresorts/:id", component: InfoComponent},
  { path: "", redirectTo: "/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
