import React from 'react'
import styled from 'styled-components'

export const TodoHeader = () => {
    return (
        <Header>
            All Tasks
        </Header>
    )
}

const Header = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 30px;
    font-weight: 500;
    margin-top: 50px;
`;