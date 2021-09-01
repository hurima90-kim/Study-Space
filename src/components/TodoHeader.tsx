import React from 'react'

interface HeaderProps {
    title: string,
}

export default ({ title }: HeaderProps) => {
    return (
        <div className="header">
            {title}
        </div>
    )
}