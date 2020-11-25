import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoForm } from '../models';
import { TodoDatabase } from '../todo.database';
import { TaskformComponent } from './taskform.component';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  @ViewChild('taskform')
  TodoRef: TaskformComponent;
  
  id:string = '';
  editForm: TodoForm;
  constructor(private activatedRoute: ActivatedRoute, private todoDB: TodoDatabase, private router: Router) { }
  
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getForm(this.id)
      .then (results => {
        this.editForm = results;
        this.TodoRef.todo = this.editForm;
      })
  }

  async getForm (id: string) {
    return await this.todoDB.getData(id);
  }

  async AddtoDB () {
    // get id for todo
    const id =  this.editForm.id;
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
