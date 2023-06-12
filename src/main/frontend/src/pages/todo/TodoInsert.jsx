import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';
import React, { useCallback, useState } from 'react';

const Form = styled.form`
    display: flex;
    background: #757575;
`;

const Input = styled.input`
    // 기본 스타일 초기화
    background: none;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    display: flex;
    color: white;
    &::placeholder {
        color: antiquewhite;
    }
    // 버튼을 제외한 영역을 모두 차지하기
    flex: 1;
`;
const Button = styled.button`
    // 기본 스타일 초기화
    background: none;
    outline: none;
    border: none;
    background: black;
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
        background: #adb5bd;
    }
`;

function TodoInsert({ onInsert }) {
    // 버튼 누르면 실행될 함수
    const [value, setValue] = useState('');
    const onChange = useCallback((e) => {
        console.log(`onChange: ${e.target.value}`);
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue('');

            // submit 이벤트는 브라우저에서 새로고침을 발생시킴
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <Form className="TodoInsert" onSubmit={onSubmit}>
            <Input
                placeholder="할 일을 입력하세요"
                style={{ fontFamily: 'SUITE-Regular' }}
                value={value}
                onChange={onChange}
            />
            <Button type="submit">
                <MdAdd />
            </Button>
        </Form>
    );
}

export default TodoInsert;
