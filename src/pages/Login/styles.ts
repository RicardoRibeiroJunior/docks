import styled from "styled-components";

export const HeaderContainer = styled.header`

    background: ${props => props.theme.blue};
    padding: 2.5rem 0 20rem;

    display: flex;
    justify-content: center;


`

export const FormContainer = styled.div`

    width: 100%;
    max-width: 500px;
    height: 420px;
    margin: 0 auto;
    padding: 0 1.5rem;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: -15rem;

    background: ${props => props.theme.white};

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input{
        
        border-radius: 6px;
        border: 1px solid ${props => props.theme["gray-400"]};
        background: ${props => props.theme.white};
        color: ${props => props.theme["gray-700"]};
        padding: 1rem;
        &::placeholder{
            ${props => props.theme.blue};
        }   
    }
    button[type="submit"]{
        height: 50px;
        border: 0;
        background: ${props => props.theme['green-500']};
        color: ${props => props.theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 3rem;
        cursor: pointer;
        &:hover{
            background: ${props => props.theme['green-700']};
            transition: background-color 0.2s;
        }
    }

`