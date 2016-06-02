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

  addTask(t_id, t_task_date, t_name, t_description, t_done){
		TASKS.push({id: +t_id, task_date: t_task_date, name: t_name, description: t_description, done: t_done});
  }

  getLastId() {
    return TASKS.length;
  }
}