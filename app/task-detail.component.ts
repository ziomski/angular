import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'my-task-detail',
  templateUrl: 'app/task-detail.component.html',
  styleUrls: ['app/task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: Task;

  constructor(
    private taskService: TaskService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.taskService.getTask(id)
      .then(task => this.task = task);
  }

  goBack() {
    window.history.back();
  }
}