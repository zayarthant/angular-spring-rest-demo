import {Injectable} from '@angular/core';
import {Student} from '../model/student.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class StudentService {

  constructor(private httpClient: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('http://localhost:8080/api/students');
  }

  getStudentById(id: string): Observable<Student> {
    return this.httpClient.get<Student>('http://localhost:8080/api/student/' + id);
  }

  createStudent(student: Student): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/student', student);
  }

}
