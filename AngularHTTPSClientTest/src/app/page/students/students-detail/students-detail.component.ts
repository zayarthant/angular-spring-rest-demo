import { Component, OnInit } from '@angular/core';
import {Student} from '../../../model/student.model';
import {StudentService} from '../../../service/student.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.css']
})
export class StudentsDetailComponent implements OnInit {

  student: Student;
  isLoading: boolean;

  constructor(public studentService: StudentService, public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe((param: Params) => {
      const paramId = 'id';
      const id: string = param[paramId];
      this.studentService.getStudentById(id).subscribe(
        value => {
          this.student = value;
          this.isLoading = false;
        }
      );
    });
  }

}
