import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { NgbModule, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { IndexComponent } from './components/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateTaskComponent,
    IndexComponent,
    ListTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NgbAccordionConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
