package com.students.resources;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.students.models.Course;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin
public class CourseController {
    private List<Course> courses = Arrays.asList(
            new Course(1, "HTML + CSS"),
            new Course(2, "Angular"),
            new Course(3, "Java"));

    @GetMapping("courses/{id}")
    public ResponseEntity<Course> getCourses(@PathVariable int id) {
        Course cou = courses.stream().filter(s -> s.getId() == id).findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course Not Found"));

        return ResponseEntity.ok(cou);
    }

    @GetMapping("courses")
    public List<Course> getCourses() {
        return courses;
    }
}
