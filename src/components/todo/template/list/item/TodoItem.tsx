import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Itodo } from "components/todo/TodoService";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import moment from "moment";
import { Modal } from 'antd';
import 'antd/dist/antd.css';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const DueDate = styled.div`
  margin-right: 15px;
  color: #858585;
`;

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const [done, setDone] = useState(false)

  const handleToggle = () => {
      toggleTodo(todo.id);
      setDone(true);
  };

  const handleRemove = () => {
    removeTodo(todo.id)
  };

  const confirmRemove = () => {
    Modal.confirm({
      title: 'Todo 삭제',
      content: '해당 Todo를 삭제하시겠습니까?',
      okText: '삭제',
      cancelText: '취소',
      onOk: () => handleRemove(),
    })
  }

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={handleToggle}>
        {done && <CheckOutlined />}
      </CheckCircle>
      <Text done={done}>{todo.text}</Text>
      <DueDate>Due Date: {`${moment(todo.dueDate).format('YYYY/MM/DD')}`}</DueDate>
      <Remove onClick={confirmRemove}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
