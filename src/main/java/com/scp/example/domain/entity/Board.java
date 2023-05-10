package com.scp.example.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@ToString
@Entity // 해당 클래스의 인스턴스들이 JPA로 관리되는 엔티티 객체임을 의미
@Table(name = "board")
@Data
@Builder
@AllArgsConstructor // @Builder 이용하기 위해선 함께 추가해야 컴파일 에러 발생하지 않음
@NoArgsConstructor // @Builder 이용하기 위해선 함께 추가해야 컴파일 에러 발생하지 않음
public class Board {

    @Id // PK에 해당하는 필드
    // @GeneratedValue(strategy = GenerationType.IDENTITY) // 사용자 입력값 대신 자동으로 채번되는 번호 사용
    private int id;

    @Column
    private String title;
    private String content;

}
