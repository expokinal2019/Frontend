import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

export interface Task {
  name: string,
  description: string,
  deadline: Date,
  labels: [],
  taskOwner: string,
  status: string,
  progress: Number
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  public task: Task
  public id


  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id
      console.log(this.id)
    })
    this.rest.findOne('tasks', this.id).subscribe(
      res => {
      this.task = res['tasks']
        console.log(this.task.name)
        console.log(this.id)
        console.log(this.task.deadline)
      }
    );
  }

  taskForm = this.fb.group({
    name: ['', Validators.required],
    deadline: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private rest: RestService, private router: Router, private activeRoute: ActivatedRoute) { }

  onSubmit() {
    let deadline = this.taskForm.value.deadline;
    this.taskForm.value.deadline = `${deadline.year}/${deadline.month}/${deadline.day}`
    this.rest.push('tasks', this.taskForm.value).subscribe(
      res => {
        this.router.navigate(['tasks']);
      }
    )
  }

}
