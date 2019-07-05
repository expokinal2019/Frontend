import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { IndexComponent } from '../components/index/index.component';
import { ListTasksComponent } from '../components/list-tasks/list-tasks.component';
import { LoginComponent } from '../components/login/login.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'tasks/create', component: CreateTaskComponent },
  { path: 'tasks', component: ListTasksComponent },
  { path: 'home', component: IndexComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
