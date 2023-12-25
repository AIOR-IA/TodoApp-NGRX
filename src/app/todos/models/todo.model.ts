export class TodoModel {
  id: string;
  task: string
  completed: boolean;

  constructor( id:string, task: string) {
    this.id = id;
    this.task = task;
    this.completed = false;
  }

}
