import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var saveButton = function(button) {
  
      button.innerHTML = 'Saving <span class="spinner"></span>';
      button.disabled = true;
      
      setTimeout(function(){
        button.innerHTML = 'Saved';
        button.className = 'done';
      }, 3000);
      
    };
    
  }

}
