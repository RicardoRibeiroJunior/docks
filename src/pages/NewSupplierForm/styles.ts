import styled from "styled-components";

export const FormContainer = styled.div`

    width: 100%;
    max-width: 1200px;
    height: auto;
    margin: 3rem auto;
    padding: 1rem 1.5rem;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    background: ${props => props.theme.white};

    h3{
        color: ${props => props.theme.blue};
        margin: 15px auto;
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
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
        width: 150px;
        border: 0;
        background: ${props => props.theme['green-500']};
        color: ${props => props.theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 2rem;
        cursor: pointer;
        &:hover{
            background: ${props => props.theme['green-700']};
            transition: background-color 0.2s;
        }
    }

`

export const ContainerInput = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    div{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        select{
            border-radius: 6px;
            border: 1px solid ${props => props.theme["gray-400"]};
            background: ${props => props.theme.white};
            color: ${props => props.theme["gray-700"]};
            padding: 1rem;
            &::placeholder{
                ${props => props.theme.blue};
            }
            font-size: 1.1rem;
            
            option{
                font-size: 1.1rem;
            }
        }
    }

    .one{
        flex: 1;
    }

    .two{
        flex: 2;
    }

    .three{
        flex: 3;
    }

`