import { Component, OnInit } from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from '@angular/common';
import { RouteParams } from '@angular/router-deprecated';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  directives: [FORM_DIRECTIVES],
  selector: 'my-task-detail',
  templateUrl: 'app/add-task.component.html',
  styleUrls: ['app/add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  tasks:Task[];
  addForm: ControlGroup;
  id: string;
  task_date: Control;
  name: Control;
  description: Control;
  done: boolean = false;
  new_id: number;
 
  constructor(
    private taskService: TaskService,
    private routeParams: RouteParams,
    private builder: FormBuilder
    ) {
    this.name = new Control('', Validators.required);
    this.task_date = new Control('', Validators.compose([Validators.required, Validators.pattern('^(0[1-9]|[12][0-9]|3[01])\-(0[1-9]|1[012])\-(19|20)[0-9][0-9]$')]));
    this.description = new Control('', Validators.compose([Validators.required, Validators.minLength(10)]));
    this.addForm = builder.group({
    name: this.name,
    task_date: this.task_date,
    description: this.description
    });
    }

  ngOnInit() {
    this.new_id = this.taskService.getLastId()+1;
  }

  Validate() {
    this.taskService.addTask(this.new_id, this.task_date.value, this.name.value, this.description.value, this.done);
  }

  goBack() {
    window.history.back();
  }
}