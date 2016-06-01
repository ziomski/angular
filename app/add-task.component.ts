import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'my-task-detail',
  templateUrl: 'app/add-task.component.html',
  styleUrls: ['app/add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  id: number;
  task_date: string = '';
  name: string = '';
  description: string = '';
  done: boolean = false;

  constructor(
    private taskService: TaskService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
  }

  addTask(id, task_date, name, description, done){
    this.taskService.addTask(id, task_date, name, description, done);
  }

  Validate() {

    this.addTask(this.id, this.task_date, this.name, this.description, this.done);
  }

  goBack() {
    window.history.back();
  }
}