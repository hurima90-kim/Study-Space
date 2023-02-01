import React, { useState } from 'react';

function useInput(initialValue, validator) {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        const {
            target: { value },
        } = e;
        let willUpdate = true;

        if (typeof validator === 'function') {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };

    return { value, onChange };
}

function Main() {
    const maxLeng = (value) => !value.includes('@');
    const name = useInput('Mr.', maxLeng);

    return (
        <div>
            <h1>Hello</h1>
            <input placeholder="Name" {...name} />
        </div>
    );
}

export default Main;
