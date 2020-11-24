import { Component, OnInit } from '@angular/core';
import { TodoSummary } from '../models';
import { TodoDatabase } from '../todo.database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  todos: TodoSummary[] = []
  constructor(private todoDB: TodoDatabase) { }

  ngOnInit() {
    this.getSummary();
    console.info(this.todos);
  }

  deleteDB(idx:string) {
    this.todoDB.removeData(idx);
    this.getSummary();
  }

  getSummary() {
    this.todoDB.getSummary()
    .then(results => {
      this.todos = results;
    })
  }
}
