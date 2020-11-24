import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskformComponent } from './taskform.component';
import { v4 as uuidv4 } from 'uuid';
import { TodoDatabase } from '../todo.database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @ViewChild('taskform')
  TodoRef: TaskformComponent;
  
  constructor(private todoDB: TodoDatabase, private router: Router) { }

  ngOnInit() {
  }

  async AddtoDB () {
    // generate new id for todo
    const id = uuidv4().toString().substring(0, 8);
    // get the new todo from the form
    const todo = this.TodoRef.todoForm.value;
    // set the new id to the new todo
    todo.id = id;
    // save this to the database
    await this.todoDB.addData(todo);

    // // navigate to /
    this.router.navigate(['/']);
  }
}
