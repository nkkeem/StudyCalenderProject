package com.scp.repository;

import com.scp.domain.TodoVO;

import java.util.List;
import java.util.Optional;

public interface TodoRepository {

    TodoVO save(TodoVO todoVO);
    void update(Long todoId, TodoUpdateDTO todoUpdateDto);

    Optional<TodoVO> findById(Long id);
    List<TodoVO> findAll();
}
