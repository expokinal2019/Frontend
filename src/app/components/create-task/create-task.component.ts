import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  taskForm = this.fb.group({
    name: ['', Validators.required],
    deadline: [this.calendar.getToday(), Validators.required],
    description: ['', Validators.required],
    labels: ['']
  });

  constructor(private fb: FormBuilder, private rest: RestService, private router: Router, private auth: AuthenticationService, private calendar: NgbCalendar) { }

  onSubmit() {
    this.taskForm.value.taskOwner = [this.auth.currentUserValue().id]
    // Crear labels
    this.taskForm.value.labels = this.taskForm.value.labels.split(',');

    // Formatear fecha
    let deadline = this.taskForm.value.deadline;
    this.taskForm.value.deadline = `${deadline.year}/${deadline.month}/${deadline.day}`;
    this.rest.push('tasks', this.taskForm.value).subscribe(
      res => {
        this.router.navigate(['tasks']);
      }
    )
  }
}
