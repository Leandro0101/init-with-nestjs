import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'task 1', completed: false },
    { id: 2, description: 'task 2', completed: true },
    { id: 3, description: 'task 3', completed: false },
    { id: 4, description: 'task 4', completed: true },
    { id: 5, description: 'task 5', completed: true },
    { id: 6, description: 'task 6', completed: false },
    { id: 7, description: 'task 7', completed: true },
    { id: 8, description: 'task 8', completed: false },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((t) => t.id === id);

    return task;
  }

  // create(task: Task) {}

  // update(task: Task) {}

  // delete(id: number) {}
}
