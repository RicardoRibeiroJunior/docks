import styled, { css } from "styled-components";

interface TdProps{
    variant?: "red" | "blue";
}


export const ManagementContainer = styled.main`
    width: 100%;
    max-width: 1500px;
    margin: 1rem auto 0;
    padding: 0 1.5rem;
`

export const ManagementTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1rem;

    th{
        padding: 1rem 2rem;
        background: ${props => props.theme["blue-100"]};
        color: ${props => props.theme.white};
        text-align: start;

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
export const Td = styled.td<TdProps>`

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


    ${props => props.variant == 'red' && css`
    
        background: ${props => props.theme["red-200"]};
        animation: piscaPisca 4s infinite;

        @keyframes piscaPisca {
            0% {
                background: ${props => props.theme["red-200"]};
            }
            25% {
                background: ${props => props.theme.white};
            }
            50% {
                background: ${props => props.theme["red-200"]};
            }
            75% {
                background: ${props => props.theme.white};
            }
            100% {
                background: ${props => props.theme["red-200"]};
            }
        }

    `}

    
`




