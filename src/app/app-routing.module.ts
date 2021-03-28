import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScreenComponent } from './add-screen/add-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

const routes: Routes = [
  {path: 'main', component:MainScreenComponent},
  {path: 'add', component:AddScreenComponent},
  {path: '', component:MainScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
