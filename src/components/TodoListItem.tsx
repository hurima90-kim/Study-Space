import React from 'react';
import styled from 'styled-components';

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return (
        <Item>
            <label className={todo.complete ? "complete" : undefined}>
                <input type='checkbox' checked={todo.complete} onChange={() => toggleTodo(todo)} />
                <p>{todo.text}</p>
                <button>❌</button>
            </label>
        </Item>
    )
}

const Item = styled.li`
    width: 480px;
    justify-content: flex-start;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }

    p {
        display: inline-flex;
        margin-left: 10px;
        width: 85%;
        font-size: 16px;
    }

    button {
        justify-content: flex-end;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        background: transparent;
    }
`;