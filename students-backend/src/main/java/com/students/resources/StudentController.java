package com.students.resources;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.students.models.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin
public class StudentController {
    private List<Student> students = new ArrayList<>();

    @PostMapping("students")
    public ResponseEntity<Student> save(@RequestBody Student student) {
        student.setId(students.size() + 1);
        students.add(student);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(student.getId())
                .toUri();

        return ResponseEntity.created(location).body(student);
    }

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
