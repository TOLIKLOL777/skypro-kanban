import styled from "styled-components";

export const MainS = styled.div`
    width: 100%;
    height: 100%;
    background-color: #EAEEF6;
`;

export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
    @media screen and (max-width: 495px) {
        width: 100%;
        padding: 0 16px;
    }
`
export const MainContent = styled.div`
    width: 100%;
    display: flex;
    
    @media screen and (max-width: 1200px) {
        display: block;
    }
`