import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const BackDrop = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    width: 160%;
    height: 550px;
    background: rgb(2,0,36);
    background: linear-gradient(52deg, 
    rgba(2,0,36,1) 
    0%, rgba(9,9,121,1) 
    35%, rgba(0,212,255,1) 100%);
`;


 const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em; 
`;


export function AccountBox(props) {
    return <BoxContainer>
                <TopContainer>
                    <BackDrop/>
                </TopContainer>
            </BoxContainer>
     
}