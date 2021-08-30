import React from 'react'
import styled from 'styled-components'
import { TodoListItem } from './TodoListItem'

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <>
            <ListTitle>📌 To-Do List</ListTitle>
            <List>
                <ul>
                    {todos.map(todo => {
                        return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
                    })}
                </ul>
            </List>
        </>
    )
}

const List = styled.div`
    display: flex;
    margin: 10px auto 30px;
    width: 500px;
    padding: 20px 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 
                0px 4px 5px 0px rgb(0 0 0 / 14%), 
                0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

const ListTitle = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 25px;
`;