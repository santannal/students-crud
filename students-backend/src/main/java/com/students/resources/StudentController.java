package com.students.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.students.models.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin
public class StudentController {
    private List<Student> students = new ArrayList<>();

    /*
     * new Student(1, "student 1", "Email1", "11973631403", 1, 1),
     * new Student(2, "student 2", "Email2", "112222222222", 2, 2));
     */

    @GetMapping("students/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable int id) {
        Student stu = students.stream().filter(s -> s.getId() == id).findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student Not Found"));

        return ResponseEntity.ok(stu);
    }

    @GetMapping("/students")
    public List<Student> getStudents() {
        return students;
    }

}
