import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.scss']
})
export class ListTeamComponent implements OnInit {
  id;
  teams = [];
  users = [];
  member: string = '';
  members = ['Diego', 'Robles'];

  public memberForm = this.fb.group({
    member: ['', Validators.required],
  });

  constructor(private rest: RestService, private fb: FormBuilder, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this.rest.findAll('teams').subscribe(
      res => { this.teams = res['teams'] }
    );

    this.rest.findAll('users').subscribe(
      res => { this.users = res['users'] }
    );
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.users.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: {name: string}) => x.name;

  onSubmit() {
    // Agregar integrante a equipo seleccionado
    this.rest.put(`teams/${this.id}/integrant/${this.memberForm.value.member._id}`, {}).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  open(content, id) {
    this.id = id
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
