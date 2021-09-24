import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    body{
        background-color: #0080ed;
    }
}
`
export const Container = styled.div `
height: 100%;

`
export const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
height: 15vh;
`;

export const Title = styled.h1`
color: #ffff;
`;

export const BoxIpt = styled.div `
height: 10vw;
display: flex;
justify-content: center;
align-items: center;
`
export const Form = styled.form`
background-color: #ffff;
`;

export const Inp = styled.input`
outline: none;
width: 65vw;
height: 4vw;
border: none;
color: #0080ed;
font-size: 1.5rem;
padding: 0.5rem;
&::placeholder{
    color: #0080ed;
    opacity: 0.6;
}
`
export const BtnIpt = styled.button`
box-sizing: border-box;
border: none;
outline: none;
height: 4vw;
background-color: #ffff;
font-size: 1rem;
padding: 0.6rem 0.5rem 0.5rem;
font-weight: 900;
color: #0080ed;
`;

export const BoxBtnClear = styled.div`
height: 4vw;
width: 13vw;
display: flex;
justify-content: flex-end;
align-items: center;
`

export const BtnClear = styled.button`
background-color: #0080ed;
height: 4vw;
width: 12vw;
box-sizing: border-box;
border: solid 2px #ffffff;
outline: none;
font-size: 1rem;
color: #ffffff;
font-weight: 900;
&:hover{
    background-color: #ffffff;
    color: #0080ed;
    border: #0080ed;
    transition: 300ms;
}
`
export const ContainerMap = styled.div`
display: flex;
justify-content: center;
`

export const BoxMap = styled.div`
width: 82%;
display: flex;
flex-direction: column;
align-items: center;
`

export const BoxTask = styled.div`
display: flex;
width: 50vw;
border: 2px solid #ffffff;
margin: 1rem;
justify-content: space-between;
align-items: center;
padding: 0.5rem;

p{
    color: #ffffff;
   overflow: hidden;
   padding: 0.2rem;
}
`

export const BoxButton = styled.div`
width: 2.5vw;
height: 2.5vw;
display: flex;
align-items: center;
`

export const ButtonTask = styled.button`
border-radius: 50%;
border: none;
width: 50%;
height: 50%;
background-color: #32CD32 ;
background-color: #ffffff;
&:hover{
    background-color: #FF4500;
    transition: 300ms;
}
`

export const Footer = styled.div`
height: 10vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #ffffff;

p{
    margin: 0.5rem;
}
`
