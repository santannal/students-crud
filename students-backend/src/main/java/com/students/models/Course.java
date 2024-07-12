package com.students.models;

public class Course {

    // Atributtes
    private int id;
    private String name;

    // builders
    public Course(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Course() {

    }

    // getters && setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
