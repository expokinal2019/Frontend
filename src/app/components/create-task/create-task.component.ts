import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  taskForm = this.fb.group({
    name: ['', Validators.required],
    deadline: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private rest: RestService, private router: Router) { }

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
