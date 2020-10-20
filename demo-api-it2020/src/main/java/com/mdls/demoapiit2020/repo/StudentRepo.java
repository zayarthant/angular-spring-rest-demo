package com.mdls.demoapiit2020.repo;

import com.mdls.demoapiit2020.model.Student;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.ApplicationScope;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
@ApplicationScope
public class StudentRepo {
    private List<Student> studentList = new ArrayList<Student>();

    @PostConstruct
    public void init() {
        this.studentList.add(new Student(1L, "example@glcv.com", "0953843534", " Default Student"));
    }

    public List<Student> getStudentList() {
        return studentList;
    }

    public Student findById(Long id) throws Exception {
        for (Student s : studentList) {
            if (s.getId().equals(id))
                return s;
        }
        throw new Exception("Not found ");
    }
}
