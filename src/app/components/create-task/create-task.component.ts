import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  taskForm = this.fb.group({
    title: ['', Validators.required],
    date: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private rest: RestService) { }

  onSubmit() {
    let date = this.taskForm.value.date;
    this.taskForm.value.date = `${date.year}/${date.month}/${date.day}`
    this.rest.push('tasks', this.taskForm.value).subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
