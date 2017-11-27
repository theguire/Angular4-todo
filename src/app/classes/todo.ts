export class Todo {
  id: number;
  text: string;
  taskCompleted: boolean;

  constructor( id: number, text: string ) {
    this.id = id;
    this.text = text;
    this.taskCompleted = false;
  }
}
