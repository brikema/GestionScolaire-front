import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/modules/student/models/student';
import { StudentService } from 'src/app/modules/student/services/student.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'div[app-student-form-page]',
  templateUrl: './student-form-page.component.html',
  styleUrls: ['./student-form-page.component.css']
})
export class StudentFormPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--height frame--top frame--padd';
  id!:number;
  student!:Student;
  studentForm!: FormGroup;
  submitted:boolean = false;

  constructor(private router: Router,private route: ActivatedRoute,private studentService: StudentService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      mail: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id){
        this.studentService.get(this.id).subscribe((stu) => {
          this.student = stu;
          this.studentForm.get("firstName")!.setValue(stu.firstName);
          this.studentForm.get("lastName")!.setValue(stu.lastName);
          this.studentForm.get("birthDate")!.setValue((new Date(stu.birthDate)).toISOString().split('T')[0]);
          this.studentForm.get("phoneNumber")!.setValue(stu.phoneNumber);
          this.studentForm.get("mail")!.setValue(stu.mail);
          this.studentForm.get("address")!.setValue(stu.address);
        });
      }
     
    });
 
  }

  openStudentInfo() {
    this.router.navigateByUrl(`/students/${this.id}`);
  }

  onSubmit(){
    if(this.studentForm.valid){
      let student:Student = this.studentForm.value;
      if(this.id){
        student.id = this.id;
      }
      this.studentService.create(student).subscribe((stu)=> {
        if(this.id){
          this.router.navigate([`/students/${this.id}`]);
        } else {
          this.router.navigate(["/students"]);
        }
        
      });
    } else {

    }
    
    
  }


}
