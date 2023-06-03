package com.scp.example.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/api/ex")
public class ExampleController {
//
//    @GetMapping("/helloworld")
//    public String HelloWorld(){
//        return "현재 시각 : " + new Date();
//    }

    @GetMapping("/getToDo/{date}")
    public String toDo(@PathVariable(name = "date") String date){
        // localhost:8090/api/ex/getToDo/2023-04-11
        return "선택한 날짜는 " + date;
    }

    @GetMapping("/helloworld2")
    public String HelloWorld2(){
        return "현재 시각 : " + new Date();
    }
}
