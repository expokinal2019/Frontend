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

const appRoutes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'tasks/create', component: CreateTaskComponent },
  { path: 'tasks', component: ListTasksComponent },
  { path: 'teams/create', component: CreateTeamComponent },
  { path: 'teams', component: ListTeamComponent },
  { path: 'tasks/edit/:id', component: EditTaskComponent },
  { path: '', component: IndexComponent }
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
