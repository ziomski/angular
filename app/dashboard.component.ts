import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private router: Router,
    private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks()
      .then(tasks => this.tasks = tasks);
  }

  gotoDetail(task: Task) {
    let link = ['TaskDetail', { id: task.id }];
    this.router.navigate(link);
  }
}