import { Moment } from 'moment';

export enum Priority {
    Low = 0, Medium, High
}

export interface Task {
    description: string;
    priority: Priority;
}

export interface TodoSummary {
    id: string;
    title: string;
}

export interface TodoForm {
    id: string;
    title: string;
    tasks: Task[];
}