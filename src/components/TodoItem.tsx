import React, { useState } from 'react';
import { Todo } from 'modules/todos';
import styled, {css} from 'styled-components';
import { FaCheckCircle, FaEraser } from 'react-icons/fa';

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
    const [done, setDone] = useState(false)

    const handleToggle = () => {
        onToggle(todo.id);
        setDone(true);
    };

    const handleRemove = () => {
        onRemove(todo.id);
    };

    return (
        <Item>
            <CheckCircle done={done} onClick={handleToggle}>
                {done && <FaCheckCircle />}
            </CheckCircle>
            <Text done={done}>{todo.content}</Text>
            <Remove onClick={handleRemove}>
                <FaEraser />
            </Remove>
        </Item>
    );
}

export default TodoItem;

const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    box-shadow: 2px 2px 7px 1px #ddd;
    border-radius: 50px;
    padding: 10px 20px;
    margin-bottom: 15px;
`;

const CheckCircle = styled.div<{done: boolean}>`
    width: 20px;
    height: 20px;
    border-radius: 16px;
    font-size: 16px;
    border: 1px solid #ddd;
    box-shadow: 1px 1px 4px 1px #ddd;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${(props) =>
        props.done &&
        css`
        border: 1px solid #33bb77;
        color: #fff;
        background-color: #33bb77;
    `}
`;
const Text = styled.div<{done: boolean}>`
    flex: 1;
    font-size: 16px;
    color: #000;
    ${(props) =>
        props.done &&
        css`
        color: #ced4da;
        text-decoration: line-through;
        `}
`;
const Remove = styled.div`
    width: 20px;
    height: 20px;
    color: #000;
    font-size: 16px;
    cursor: pointer;
`;