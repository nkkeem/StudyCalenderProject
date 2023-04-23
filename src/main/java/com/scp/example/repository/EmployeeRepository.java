package com.scp.example.repository;

import com.scp.example.domain.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    // JpaRepository<entity클래스, PK타입>
}
