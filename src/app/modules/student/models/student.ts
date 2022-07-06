import { Course } from "../../course/models/course";

export class Student {
    id!: number;
    firstName!: string;
    lastName!: string;
    birthDate!: string;
    mail!: string;
    phoneNumber!: string;
    address!: string;
    // courses: Course[] = [];
}
