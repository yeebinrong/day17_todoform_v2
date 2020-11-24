import { Summary } from '@angular/compiler';
import { Injectable } from "@angular/core";
import { Dexie } from 'dexie';
import { TodoForm, TodoSummary } from './models';


@Injectable()
export class TodoDatabase extends Dexie {
    private todo: Dexie.Table<TodoForm, string>;

    constructor () {
        // database name
        super('tododb');

        //setup schema for v1
        this.version(1).stores({
            todo: "id"
        })

        //get a reference to the todo collection
        this.todo = this.table("todo");
    }

    async getSummary():Promise<TodoSummary[]> {
        return (await this.todo.toArray()).map(d => {
            return {
                id: d.id,
                title: d.title
            } as TodoSummary
        })
    }

    async addData(t: TodoForm):Promise<any> {
        return await this.todo.put(t);
    }

    async getData(idx:string):Promise<TodoForm> {
        return await this.todo.get(idx);
    }

    async removeData(idx:string):Promise<any> {
        return await this.todo.delete(idx);
    }
}