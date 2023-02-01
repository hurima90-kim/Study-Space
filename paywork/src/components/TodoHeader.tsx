import React from 'react'

interface HeaderProps {
    title: string,
}

const TodoHeader = ({ title }: HeaderProps) => {
    return (
        <div className="header">
            {title}
        </div>
    )
}

export default TodoHeader