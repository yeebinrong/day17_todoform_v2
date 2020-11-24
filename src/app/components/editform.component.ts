import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TodoForm } from '../models';
import { TodoDatabase } from '../todo.database';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  id:string = '';
  editForm: TodoForm;
  constructor(private activatedRoute: ActivatedRoute, private todoDB: TodoDatabase) { }
  
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getForm(this.id)
      .then (results => {
        this.editForm = results;
        console.info("results ", results);
      })
  }

  async getForm (id: string) {
    return await this.todoDB.getData(id);
  }

}
