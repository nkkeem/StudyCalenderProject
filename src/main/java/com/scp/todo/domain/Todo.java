package com.scp.todo.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Table(name = "todo")
@NoArgsConstructor
public class Todo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "todo_id", nullable = false)
    private Integer todoId;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "create_at")
    private Date createAt;

    @Column(name = "date", nullable = false)
    private Date date;

    @Column(name = "checked_yn", nullable = false)
    private String checkedYn = "N";

}
