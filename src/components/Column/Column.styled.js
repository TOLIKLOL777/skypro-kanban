import styled from "styled-components";

export const ColumnS = styled.section`
    width: 20%;
    margin: 0 auto;
    display: block;
    padding-bottom: 32px;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        display: block;
    }
`
export const ColumnTitle = styled.div`
    padding: 0 10px;
    margin: 15px 0;

    & p {
        color: ${({ theme }) => theme.colors.muted};
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-transform: uppercase;
    }
`
export const Cards = styled.div`
    width: 100%;
    display: block;
    position: relative;

    @media screen and (max-width: 1200px) {
        width: 100%;
        display: flex;
        overflow-y: auto;
        
    }
`

export const EmptyCards = styled.div`
    height: 20px;
    padding: 10px;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
`