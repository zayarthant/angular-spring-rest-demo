import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student.model';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  students: Student[];

  constructor(public  studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      value => this.students = value,
      error => console.log(error),
      () => console.log('Finished Request Procress')
    );
  }

}
