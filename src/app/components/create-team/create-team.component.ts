import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent  {
  taskForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private rest: RestService, private router: Router) { }

  onSubmit() {
    this.rest.push('teams', this.taskForm.value).subscribe(
      res => {
        this.router.navigate(['teams']);
      }
    )
  }
}
