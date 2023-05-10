package com.scp.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/api/ex")
public class ExampleController {

    @GetMapping("/helloworld")
    public String HelloWorld(){
        return "현재 시각 : " + new Date();
    }

    @GetMapping("/board")
    public String board(@RequestParam String date){
        return "오늘 날짜 : " + date;
    }

}
