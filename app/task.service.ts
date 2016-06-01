import { Task } from './task';
import { TASKS } from './tasks-database';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  getTasks() {
    return Promise.resolve(TASKS);
  }

  getTask(id: number) {
    return Promise.resolve(TASKS).then(
      tasks => tasks.filter(task => task.id === id)[0]
    );
  }

  addTask(id, task_date, name, description, done){
		TASKS.push({"id":id, "task_date":task_date, "name": name, "description": description, "done": done});
  }
}