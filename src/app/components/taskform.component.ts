import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  @Input() editForm: FormGroup;
  minDate = new Date();
  todoForm: FormGroup;
  taskFormArray:FormArray;
  titleCtrl:FormControl
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    console.log(this.editForm);
    this.todoForm = this.editForm || this.CreateTodo();
    this.taskFormArray = this.todoForm.get('tasks') as FormArray;
    this.titleCtrl = this.todoForm.get('title') as FormControl;
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
