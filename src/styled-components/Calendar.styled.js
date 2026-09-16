import styled from 'styled-components'

export const CalendarS = styled.div`
    width: 182px;
    margin-bottom: 20px;

    @media screen and (max-width: 660px) {
        max-width: 340px;
        width: 100%;
    }

    @media screen and (max-width: 495px) {
        width: 100%;
    }
`
export const CalendarTtl = styled.p`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;
    padding: 0 7px;

    @media screen and (max-width: 660px) {
        padding: 0;
    }
`
export const CalendarBlock = styled.div`
    display: block;
`
export const CalendarNav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 7px;

    @media screen and (max-width: 660px) {
        padding: 0;
    }
`
export const CalendarMonth = styled.div`
    color: #94A6BE;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
`
export const NavActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const NavAction = styled.div`
    width: 18px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CalendarContent = styled.div`
    margin-bottom: 12px;
`
export const CalendarDaysNames = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
`
export const CalendarDayName = styled.div`
    color: #94A6BE;
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;

    @media screen and (max-width: 660px) {
        font-size: 14px;
    }
`
export const CalendarDayNameWeekend = styled(CalendarDayName)`
    color: #565EEF;
`
export const CalendarCells = styled.div`
    width: 182px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 660px) {
        width: 344px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`
export const CalendarCell = styled.div`
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;

    &:hover {
        color: #94A6BE;
        background-color: #EAEEF6;
    }

    @media screen and (max-width: 660px) {
        width: 42px;
        height: 42px;
        font-size: 14px;
    }
`
export const CalendarCellOtherMonth = styled(CalendarCell)`
    opacity: 0.5;

    &:hover {
        color: #94A6BE;
        background-color: transparent;
        cursor: default;
    }
`
export const CalendarCellCurrent = styled(CalendarCell)`
    font-weight: 700;
`
export const CalendarCellWeekend = styled(CalendarCell)`
    color: #565EEF;
`
export const CalendarCellOtherMonthWeekend = styled(CalendarCell)`
    opacity: 0.5;
    color: #565EEF;
`
export const CalendarPeriod = styled.div`
    padding: 0 7px;

    @media screen and (max-width: 660px) {
        padding: 0;
    }
`
export const CalendarPeriodP = styled.p`
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;

    & span {
        color: #000;
    }

    @media screen and (max-width: 660px) {
        font-size: 14px;
    }
`