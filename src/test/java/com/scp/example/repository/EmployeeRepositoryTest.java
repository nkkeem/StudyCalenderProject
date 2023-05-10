package com.scp.example.repository;

import com.scp.example.domain.entity.Employee;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
public class EmployeeRepositoryTest {

    @Autowired
    EmployeeRepository employeeRepository;

    @Test
    public void insert(){
        // EmployeeEntity 생성 1
        Employee employee1 =
                Employee.builder()
                        .empno(1000)
                        .name("tester")
                        .dept("dept1")
                        .salary(1000)
                        .build();

        employeeRepository.save(employee1);

        // EmployeeEntity 생성 2
        Employee employee2 = new Employee();
        employee2.setEmpno(1001);
        employee2.setName("tester2");
        employee2.setDept("dept2");
        employee2.setSalary(800);

        employeeRepository.save(employee2);
    }

    @Test
    public void select(){
        Optional<Employee> entity = employeeRepository.findById(1000);

        entity.ifPresent(
                selectEmployee -> {
                    System.out.println("@@ " + selectEmployee.toString());
                }
        );
    }

    @Test
    public void update(){
        Optional<Employee> employee = employeeRepository.findById(1000);

        employee.ifPresent(
                selectEmployee -> {
                    selectEmployee.setSalary(2000);
                    employeeRepository.save(selectEmployee);
                }
        );
    }

    @Test
    public void delete(){
        Optional<Employee> employee = employeeRepository.findById(1001);

        Assertions.assertTrue(employee.isPresent());

        employee.ifPresent(
                selectEmployee -> {
                    employeeRepository.deleteById(selectEmployee.getEmpno());
                }
        );

        Optional<Employee> deletedEmployee = employeeRepository.findById(1001);
        Assertions.assertFalse(deletedEmployee.isPresent());
    }

}
