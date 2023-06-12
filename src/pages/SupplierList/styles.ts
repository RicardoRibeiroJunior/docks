import styled from "styled-components";


export const SupplierContainer = styled.main`
    width: 100%;
    max-width: 1500px;
    margin: 1rem auto 0;
    padding: 0 1.5rem;
`

export const SupplierTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1rem;

    th{
        padding: 1rem 2rem;
        background: ${props => props.theme["blue-100"]};
        color: ${props => props.theme.white};

        &:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }

    }

    td{
        padding: 1.25rem 2rem;
        background:${(props) => props.theme.white};

        &:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`

export const Button = styled.button`

    height: 50px;
    border: 0;
    background: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    cursor: pointer;

    &:hover{
        background: ${props => props.theme['green-700']};
        transition: background-color 0.2s;
    }

`
