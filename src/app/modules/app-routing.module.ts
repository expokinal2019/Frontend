import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { IndexComponent } from '../components/index/index.component';
import { ListTasksComponent } from '../components/list-tasks/list-tasks.component';
import { EditTaskComponent } from '../components/edit-task/edit-task.component';
import { CreateTeamComponent } from '../components/create-team/create-team.component';
import { ListTeamComponent } from '../components/list-team/list-team.component';
import { LoginComponent } from '../components/login/login.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { EditTeamComponent } from '../components/edit-team/edit-team.component';
import { Error404Component } from '../components/error404/error404.component';

const appRoutes: Routes = [
  { path: '',
    component: NavbarComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'tasks/create', component: CreateTaskComponent },
      { path: 'tasks/edit/:id', component: EditTaskComponent },
      { path: 'tasks', component: ListTasksComponent },
      { path: 'teams/create', component: CreateTeamComponent },
      { path: 'teams/edit/:id', component: EditTeamComponent },
      { path: 'teams', component: ListTeamComponent },
    ]
  },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: Error404Component }
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
