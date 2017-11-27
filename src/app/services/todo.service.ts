import { el } from '@angular/platform-browser/testing/src/browser_util';

import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
import { element } from 'protractor';

@Injectable()
export class TodoService {
  private todos: Todo[];
  private nextId: number;

  constructor() {
    this.todos = [
      new Todo( 0, 'Movie with Beth at 8pm' ),
      new Todo( 1, 'Call Dad' ),
      new Todo( 2, 'Pay Bills' )
    ];
    this.nextId = 3;
   }
   public addTodo( text: string ): void {
     console.log( this.todos );
     const newTodo = new Todo( this.nextId, text );
     this.todos.push( newTodo );
     this.nextId++;
   }

   public removeCompletedTasks(){
     const oldTodos: Todo[] = this.todos;
     this.todos = [];
     this.nextId = 0;
    oldTodos.forEach(element => {
      console.log( element );
       if ( ! element.taskCompleted ) {
          this.addTodo( element.text );
       }
     });
   }

   public getTodos(): Todo[] {
     return this.todos;
   }

   public removeTodo( id: number ): void {
     this.todos = this.todos.filter(( todo ) => todo.id !== id );
   }

}
