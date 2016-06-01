import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { DashboardComponent } from './dashboard.component';
import { TasksComponent } from './tasks.component';
import { TaskDetailComponent } from './task-detail.component';
import { AddTaskComponent } from './add-task.component';
import { TaskService } from './task.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Current tasks</a>
      <a [routerLink]="['Tasks']">All Tasks</a>
      <a [routerLink]="['AddTask']">Add task</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    TaskService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'TaskDetail',
    component: TaskDetailComponent
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksComponent
  },
  {
    path: '/add',
    name: 'AddTask',
    component: AddTaskComponent
  }
])
export class AppComponent {
  title = 'My tasks application';
}
