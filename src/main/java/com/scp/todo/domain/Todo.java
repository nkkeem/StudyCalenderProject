package com.scp.todo.domain;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@Entity
@Accessors(chain = true)
@Table(name = "studycalendar.todo")
public class Todo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "todo_id", nullable = false)
    private Integer todoId;

    @Column(name = "user_id", nullable = false)
    private String userId = "test";

    @Column(name = "content", nullable = false)
    private String content = "text";

    @Column(name = "create_at")
    private LocalDate createAt;

    @Column(name = "date", nullable = false)
    private LocalDate date;

}
