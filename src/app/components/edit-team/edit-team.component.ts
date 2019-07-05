import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

export interface Team {
  _id?: string;
  name?: string;
  description?: string;
  integrants?: [];
}

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent {
  public team: Team = {
  };
  public id;
  public teamForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private rest: RestService, private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id
    });

    this.rest.findOne('teams', this.id).subscribe(
      res => {
        this.team = res['teams'];
        this.teamForm.setValue({
          name: this.team.name,
          description: this.team.description
        });
      }
    );
  }

  onSubmit() {
    this.rest.update('teams', this.team._id, this.teamForm.value).subscribe(
      res => {
        this.router.navigate(['teams']);
      }
    );
  }

  delete() {
    this.rest.delete('teams', this.team._id).subscribe(
      res => {
        this.router.navigate(['teams']);
      }
    );
  }

}
