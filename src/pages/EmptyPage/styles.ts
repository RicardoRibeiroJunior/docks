import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;

    img{
        width: 200px;
        height: 200px;
        opacity: 0.4;
    }

    p{
        margin-top: 16px;
        font-size: 1.5rem;
        color: ${props => props.theme.blue};
    }

`