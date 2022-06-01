import React from 'react';

function useConfirm(message = '', onConfirm, onCancel) {
    if (!onConfirm && typeof onConfirm !== 'function') {
        return;
    }
    if (onCancel && typeof onCancel !== 'function') {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };

    return confirmAction;
}

function Main() {
    const deleteWorld = () => console.log('Deleting the world...');
    const abort = () => console.log('Aborted');
    const confirmDelete = useConfirm('Are you sure', deleteWorld, abort);

    return (
        <div>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
}

export default Main;
