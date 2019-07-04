import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {
  tasks = [];
  public id

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.findAll('tasks').subscribe(
      res => { this.tasks = res['tasks'] }
    );
  }

  getID(id){
    this.id = id
  }
}
