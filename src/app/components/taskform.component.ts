import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task, TodoForm } from '../models';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  minDate = new Date();
  todoForm: FormGroup;
  taskFormArray:FormArray;
  titleCtrl:FormControl
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.CreateTodo();
    this.taskFormArray = this.todoForm.get('tasks') as FormArray;
    this.titleCtrl = this.todoForm.get('title') as FormControl;
  }

  // Get & Set
  @Input() 
  get todo(): TodoForm {
    const t: TodoForm = this.todoForm.value as TodoForm;
    t.tasks = t.tasks.map(v => {
      // @ts-ignore
      v.priority = parseInt(v.priority);
      return v;
    })
    return this.todoForm.value as TodoForm;
  }
  set todo(f:TodoForm) {
    console.info("retrived form" ,f);
    for (let i of f.tasks) {
      this.AddTask();
    }
    this.todoForm.patchValue({
      title: f.title,
      tasks: f.tasks
    })
    console.info("UPDATED ", this.todoForm.value)
    
  }

  AddTask() {
    const task = this.CreateTask()
    this.taskFormArray.push(task);
  }

  RemoveTask(i) {
    this.taskFormArray.removeAt(i);
  }

  private CreateTodo():FormGroup {
    return this.fb.group({
      id: this.fb.control(''),
      title: this.fb.control('', [Validators.required]),
      tasks: this.fb.array([])
    })
  }

  private CreateTask():FormGroup {
    return this.fb.group({
      description: this.fb.control('', [Validators.required]),
      priority: this.fb.control(0)
    })
  }
}
