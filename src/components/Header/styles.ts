import styled from "styled-components";

export const HeaderContainer = styled.header`

    background: ${props => props.theme.blue};
    padding: 1rem 3rem;

`

export const HeaderContent = styled.div`

    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const UserData = styled.div`
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    span{
        font-size: 1rem;
        color: ${props => props.theme.white};
    }

    div{
        display: flex;
        flex-direction: column;
    }

    div a{
        color: ${props => props.theme.white};
    }

`

export const ImagePerfil = styled.div`

    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: ${prpos => prpos.theme.white};
    margin: 0 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    span{
        font-size: 1rem;
        font-weight: bold;
        color: ${props => props.theme.blue};
    }

`

