package com.mdls.demoapiit2020.controller;

import com.mdls.demoapiit2020.model.Student;
import com.mdls.demoapiit2020.repo.StudentRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class StudentController {

    private StudentRepo studentRepo;

    public StudentController(StudentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }

    @PostMapping("/student")
    public ResponseEntity create(@RequestBody  Student student){
        this.studentRepo.getStudentList().add(student);
        return  new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/students")
    public ResponseEntity<List<Student>> getAll(){
        List<Student> studentList = this.studentRepo.getStudentList();
        return new ResponseEntity<>(studentList, HttpStatus.OK);
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<Student> get(@PathVariable("id") Long id) throws Exception {
        Student student = this.studentRepo.findById(id);
        return  new ResponseEntity<>(student, HttpStatus.OK);
    }

}
