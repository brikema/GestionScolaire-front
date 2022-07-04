import { Course } from "../../course/models/course";

export class Student {
    id: number | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    birthDate: Date | undefined;
    mail: string | undefined;
    phoneNumber: string | undefined;
    courses: Course[] = [];
}