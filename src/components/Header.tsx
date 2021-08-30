import React from 'react'
import styled from 'styled-components';

export const Header = () => {
    return (
        <Headers>
            <Title>To-Do List App</Title>
        </Headers>
    )
}

const Headers = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #29b6f6;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 
                0px 4px 5px 0px rgb(0 0 0 / 14%), 
                0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

const Title = styled.h1`
    font-size: 30px;
    color: #fff;
    padding: 20px;
`;