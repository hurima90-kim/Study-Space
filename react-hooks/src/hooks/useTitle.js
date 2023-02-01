import React, { useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);

    return setTitle;
};

function Main() {
    const titleUpdater = useTitle('Loading...');

    setTimeout(() => titleUpdater('Home'), 5000);

    return (
        <div>
            <h1>Hi</h1>
        </div>
    );
}

export default Main;
