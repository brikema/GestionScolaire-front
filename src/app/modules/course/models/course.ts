import { Student } from "../../student/models/student";

export class Course {
    id!: number;
    theme!:string;
    hours!:number;
    students: Student[] = [];
}