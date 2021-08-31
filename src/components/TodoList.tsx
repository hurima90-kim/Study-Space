import React from 'react';
import { Todo } from 'modules/todos';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
    if (todos.length === 0) 
    return <Notice><FaExclamationTriangle/>등록된 항목이 없습니다.</Notice>;
    return (
        <List>
            {todos && 
                todos.map(todo => (
                    <TodoItem
                    todo={todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todo.id}
                    />
                ))
            }
        </List>
    );
}

export default TodoList;

const Notice = styled.p`
    display: flex;
    justify-content: center;
    font-size: 18px;
`;

const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;