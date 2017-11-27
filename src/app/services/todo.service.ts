import { el } from "@angular/platform-browser/testing/src/browser_util";

import { Injectable } from "@angular/core";
import { Todo } from "../classes/todo";
import { element } from "protractor";

@Injectable()
export class TodoService {
  private todos: Todo[];
  private nextId: number;

  constructor() {
    // start off with some todo items
    this.todos = [
      new Todo(0, "Movie with Beth at 8pm"),
      new Todo(1, "Call Dad"),
      new Todo(2, "Pay Bills")
    ];
    this.nextId = 3;
  }
  public addTodo(text: string): void {
    console.log(this.todos);
    const newTodo = new Todo(this.nextId++, text); // create a new item
    this.todos.push(newTodo); // push the item on the stack using the service
  }

  public removeCompletedTasks() {
    const oldTodos: Todo[] = this.todos; // save off the current list
    this.todos = []; // empty the current list
    this.nextId = 0;
    oldTodos.forEach(element => {
      // loop through the current list
      console.log(element);
      if (!element.taskCompleted) {
        // if the task has not been checked
        this.addTodo(element.text); // add it back to the list
      }
    });
  }

  public getTodos(): Todo[] {
    return this.todos;
  }
  /*
   public removeTodo( id: number ): void {
     this.todos = this.todos.filter(( todo ) => todo.id !== id );
   } */
}
