import React from 'react';

function usePreventLeave() {
    const listener = (event) => {
        event.preventDefalut();
        event.returnValue = '';
    };
    const enablePrevent = () =>
        window.addEventListener('beforeunload', listener);
    const disablePrevent = () =>
        window.removeEventListener('beforeunload', listener);

    return { enablePrevent, disablePrevent };
}

function Main() {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
        <div>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
}

export default Main;
