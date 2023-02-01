import React, { useEffect, useRef } from 'react';
import { Item } from '../types';

interface TodoItemProps {
    item: Item,
    toggleItem(id: number): void,
    toggleEditItem(id: number): void,
    updateItem(id: number, content: string): void,
    removeItem(id: number): void
}


// eslint-disable-next-line import/no-anonymous-default-export
export default ({
    item: {
        id, content, editing, isCheck,
    },
    toggleItem,
    toggleEditItem,
    updateItem,
    removeItem,
    }: TodoItemProps) => {
    const inputText = useRef<HTMLInputElement>(null);

    useEffect(() => inputText?.current?.focus());

    // 할 일 수정하기
    const acceptEdit = (itemID: number) => {
        const itemText = inputText?.current?.value?.trim() || '';

        if (itemText !== '') {
        updateItem(itemID, itemText);
        toggleEditItem(itemID);
        }
    };


    return (
        <li>
            {editing
                ? (
                <>
                    <input
                    className="edit-item"
                    ref={inputText}
                    defaultValue={content}
                    />
                    <div>
                    <span className="icon" role="presentation" onClick={() => acceptEdit(id)}>
                        <i className="fas fa-save" />
                    </span>
                    <span className="icon" role="presentation" onClick={() => toggleEditItem(id)}>
                        <i className="fas fa-ban" />
                    </span>
                    </div>
                </>
                )
                : (
                <>
                    <div className="check-item-container">
                        <div
                            onClick={() => toggleItem(id)}
                            role="presentation"
                            className={isCheck ? 'checkbox-item checked' : 'checkbox-item'}
                        />
                        <span>{isCheck ? <s>{content}</s> : content}</span>
                    </div>
                    <div>
                        <span className="icon" role="presentation" onClick={() => toggleEditItem(id)}>
                            <i className="fas fa-pencil-alt" />
                        </span>
                        <span className="icon" role="presentation" onClick={() => removeItem(id)}>
                            <i className="fas fa-trash-alt" />
                        </span>
                    </div>
                </>
                )}
            </li>
        );
    };
