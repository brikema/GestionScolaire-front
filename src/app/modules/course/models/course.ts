import { Student } from "../../student/models/student";

export class Course {
    id: number | undefined;
    theme:string | undefined;
    hours:number | undefined;
    students: Student[] = [];
}