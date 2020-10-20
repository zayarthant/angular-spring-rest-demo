package com.mdls.demoapiit2020.model;

public class Student {
    private Long id;
    private String email;
    private String phone;
    private String detail;

    public Student() {

    }

    public Student(Long id, String email, String phone, String detil) {
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.detail = detil;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }
}
