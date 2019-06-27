import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';



export interface Task {
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

  public labels: [];
  public task: Task = {
  };
  public id;
  public taskForm = this.fb.group({
    name: ['', Validators.required],
    deadline: ['', Validators.required],
    description: ['', Validators.required],
    labels: ['', Validators.required]
  });

  constructor(private confirmationDialogService: ConfirmationDialogService, private fb: FormBuilder, private rest: RestService, private router: Router, private activeRoute: ActivatedRoute, private _modalService: NgbModal){
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id
    });

    this.rest.findOne('tasks', this.id).subscribe(
      res => {
        this.task = res['tasks'];
        this.taskForm.setValue({
          name: this.task.name,
          deadline: this.task.deadline,
          description: this.task.description,
          labels: this.task.labels
        });
      }
    );
  }
  eliminar(){
    this.rest.delete('tasks/' + this.id).subscribe(
      res => {
        this.router.navigate(['tasks']);
      }
    )
  }

  public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Eliminar Tarea', '¿Está seguro de querer eliminar esta tarea?', ' Esta acción no puede deshacerse')
    .then((confirmed) => {
      this.eliminar();
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }



  onSubmit() {
    this.rest.put('tasks/' + this.id, this.taskForm.value).subscribe(
      res => {
        this.router.navigate(['tasks']);
      }
    )
  }
}
