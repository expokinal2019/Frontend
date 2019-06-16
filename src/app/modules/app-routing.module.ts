import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CreateTaskComponent } from '../components/create-task/create-task.component';

const appRoutes: Routes = [
  { path: 'navbar', component: NavbarComponent},
  { path: '', component: AppComponent },
  {path: 'createTask', component: CreateTaskComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
