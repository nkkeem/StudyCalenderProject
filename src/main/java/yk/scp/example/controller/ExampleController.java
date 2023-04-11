package yk.scp.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/api/ex")
public class ExampleController {

    @GetMapping("/helloworld")
    public String HelloWorld(){
        return "현재 시각 : " + new Date();
    }
}
