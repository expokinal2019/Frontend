import { Component, OnInit } from '@angular/core';
// import { trigger, state, style, animate, transition } from '@angular/animations';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {
  tasks = [];

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.findAll('tasks').subscribe(
      res => this.tasks = res['tasks']
    );
  }

}
