import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Student} from '../../model/student.model';
import {StudentService} from '../../service/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('myForm')
  myForm: NgForm;

  constructor(public studentSerice: StudentService, public router: Router) { }

  ngOnInit(): void {
  }

  summit(): void{
    const student: Student = new Student(this.myForm.value.id, this.myForm.value.name, this.myForm.value.phone, this.myForm.value.detail);
    console.log(student);
    this.studentSerice.createStudent(student).subscribe(
      value => { console.log(value); },
      error => { console.log(error); },
      () => {
        this.myForm.reset();
        this.router.navigate(['students']);
      }
    );
  }

}
