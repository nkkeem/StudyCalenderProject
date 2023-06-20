import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import cn from 'classnames';

const Div = styled.div`
    display: flex;
    height: 50px;
    &:hover {
        background: #eeeeee;
    }
`;

const Content = styled.div`
    display: flex !important;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    &.checked {
        color: #adb5bd;
        text-decoration: line-through;
    }
`;

const Button = styled.button`
    display: flex;
    flex: 1;
    svg {
        font-size: 2rem;
    }
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: none;
    outline: none;
    border: none;

    &.deleteBox {
        svg {
            color: #ff6b6b;
            &:hover {
                color: red;
            }
        }
    }
    &.checkBox {
        svg {
            &:hover {
                color: #a9a9a9;
            }
        }
    }
`;

function TodoItem({ todo, onRemove }) {
    const { content, checked } = todo;
    const [toggle, setToggle] = useState(checked);

    return (
        <Div className="TodoItem">
            <Button
                className={cn('checkBox', { checked })}
                onClick={() => {
                    console.log(`checked! ${toggle}`);
                    setToggle(!toggle);
                }}
            >
                {toggle ? (
                    <CheckBoxOutlinedIcon />
                ) : (
                    <CheckBoxOutlineBlankOutlinedIcon />
                )}
            </Button>
            <Content className={cn({ checked })}>{content}</Content>
            <Button className="deleteBox" onClick={() => onRemove(todo.id)}>
                <RemoveCircleOutlineRoundedIcon />
            </Button>
        </Div>
    );
}

export default TodoItem;
