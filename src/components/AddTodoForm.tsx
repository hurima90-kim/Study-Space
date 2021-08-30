import React, { ChangeEvent, FormEvent, useState } from 'react'
import styled from 'styled-components';

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }

    return (
        <>
            <FormTitle>🖌 Add To-Do</FormTitle>
            <TodoForm>
                <TodoInput type="text" value={newTodo} onChange={handleChange} />
                <TodoBtn type="submit" onClick={handleSubmit}>➕</TodoBtn>
            </TodoForm>
        </>
    )   
}

const FormTitle = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 25px;
    margin-top: 50px;
`;

const TodoForm = styled.form`
    display: flex;
    justify-content: center;
    margin: 10px auto 30px;
    width: 500px;
    padding: 20px 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 
                0px 4px 5px 0px rgb(0 0 0 / 14%), 
                0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

const TodoInput = styled.input.attrs({
    type: "text",
    required: true,
    placeholder: "What do you want to do?"
})`
    width: 80%;
    height: 40px;
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
    padding-left: 20px;
`;

const TodoBtn = styled.button`
    width: 10%;
    margin-left: 20px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
`;