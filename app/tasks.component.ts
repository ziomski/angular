import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'my-tasks',
  templateUrl: 'app/tasks.component.html',
  styleUrls:  ['app/tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  selectedTask: Task;

  constructor(
    private router: Router,
    private taskService: TaskService) { }

  getTasks() {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }

  onSelect(task: Task) { this.selectedTask = task; }

  gotoDetail() {
    this.router.navigate(['TaskDetail', { id: this.selectedTask.id }]);
  }
}