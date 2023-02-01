import React, { FormEvent, useRef, useEffect } from 'react';

interface TodoFormProps {
    emptyList: boolean,
    addItem(content: string): void,
}
    
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ emptyList, addItem }: TodoFormProps) => {
    const inputText = useRef<HTMLInputElement>(null);
    
    // 사이트 진입 또는 할 일 작성후 input에 커서 활성화
    const focusInputText = () => inputText?.current?.focus();
    
    useEffect(() => {
        if (emptyList) focusInputText();
    });
    
    // input에 값이 입력되면 할 일 추가 & 값이 비어 있으면 할 일 추가 안됨
    const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    
    if (inputText && inputText.current && inputText.current.value !== '') {
        addItem(inputText.current.value);
        inputText.current.value = '';
    }
};

return (
    <form onSubmit={submitHandler}>
        <input ref={inputText} placeholder="What needs to be done?" />
        <button type="submit">
            <i className="fas fa-plus" />
        </button>
    </form>
    );
};