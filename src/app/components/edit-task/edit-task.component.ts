import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

export interface Task {
  _id?: string,
  name?: string,
  description?: string,
  deadline?: Date,
  labels?: [],
  taskOwner?: string,
  status?: string,
  progress?: Number
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {

  public task: Task = {
  };
  public id;
  public taskForm = this.fb.group({
    name: ['name', Validators.required],
    deadline: [Date.now(), Validators.required],
    description: ['description', Validators.required],
  });

  constructor(private fb: FormBuilder, private rest: RestService, private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id
    });

    this.rest.findOne('tasks', this.id).subscribe(
      res => {
        this.task = res['tasks'];
        this.taskForm.setValue({
          name: this.task.name,
          deadline: new Date(this.task.deadline),
          description: this.task.description
        });
      }
    );
  }

  onSubmit() {
    let deadline = this.taskForm.value.deadline;
    if(!deadline.getDay) {
      this.taskForm.value.deadline = `${deadline.year}/${deadline.month}/${deadline.day}`;
    }
    this.rest.update('tasks', this.task._id,this.taskForm.value).subscribe(
      res => {
        this.router.navigate(['tasks']);
      }
    )
  }

  delete() {
    this.rest.delete('tasks', this.task._id).subscribe(
      res => {
        this.router.navigate(['tasks']);
      }
    )
  }

}
