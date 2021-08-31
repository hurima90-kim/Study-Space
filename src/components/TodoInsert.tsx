import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { FaPlusCircle } from 'react-icons/fa';

type TodoInsertProps = {
    onInsert: (text: string) => void;
};

function TodoInsert({ onInsert }: TodoInsertProps) {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const trim = value.trim();
        if(!trim) return;
        onInsert(value);
        setValue('');
    };

    return (
        <TodoForm onSubmit={onSubmit}>
            <input
                autoFocus
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={onChange}
                required
            />
            <button type="submit"><FaPlusCircle size='30' color='#4094ff'/></button>
        </TodoForm>
    );
}

export default TodoInsert;

const TodoForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    width: 500px;

    input {
        flex: 0.9;
        height: 30px;
        border: none;
        border-bottom: 1px solid gray;
        padding-left: 20px;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }
`;