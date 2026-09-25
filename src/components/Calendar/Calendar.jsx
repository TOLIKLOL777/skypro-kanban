import { useState } from "react";
import {
  CalendarS,
  CalendarTtl,
  CalendarBlock,
  CalendarNav,
  CalendarMonth,
  NavActions,
  NavAction,
  CalendarContent,
  CalendarDaysNames,
  CalendarCells,
  CalendarDayName,
  CalendarDayNameWeekend,
  CalendarCell,
  CalendarCellOtherMonth,
  CalendarCellCurrent,
  CalendarCellWeekend,
  CalendarCellOtherMonthWeekend,
  CalendarPeriod,
  CalendarPeriodP,
} from "./Calendar.styled.js";

const Calendar = () => {
  const [date, setDate] = useState('')
  const [selectedDay, setSelectedDay] = useState(null)

  const handleDateSelect = (day) => {
    setSelectedDay(day)
    setDate(`${String(day).padStart(2, '0')}.09.23`)
  }

  return (
    <CalendarS>
      <CalendarTtl>Даты</CalendarTtl>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>Сентябрь 2023</CalendarMonth>
          <NavActions>
            <NavAction data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                  <path fill="currentColor" d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                  <path fill="currentColor" d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.249 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.75097 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </NavActions>
        </CalendarNav>
        <CalendarContent>
          <CalendarDaysNames>
            <CalendarDayName>пн</CalendarDayName>
            <CalendarDayName>вт</CalendarDayName>
            <CalendarDayName>ср</CalendarDayName>
            <CalendarDayName>чт</CalendarDayName>
            <CalendarDayName>пт</CalendarDayName>
            <CalendarDayNameWeekend>сб</CalendarDayNameWeekend>
            <CalendarDayNameWeekend>вс</CalendarDayNameWeekend>
          </CalendarDaysNames>
          <CalendarCells>
            <CalendarCellOtherMonth>28</CalendarCellOtherMonth>
            <CalendarCellOtherMonth>29</CalendarCellOtherMonth>
            <CalendarCellOtherMonth>30</CalendarCellOtherMonth>
            <CalendarCellOtherMonth>31</CalendarCellOtherMonth>
            <CalendarCell $isChoice={selectedDay === 1} onClick={() => handleDateSelect(1)}>1</CalendarCell>
            <CalendarCellWeekend $isChoice={selectedDay === 2} onClick={() => handleDateSelect(2)}>2</CalendarCellWeekend>
            <CalendarCellWeekend $isChoice={selectedDay === 3} onClick={() => handleDateSelect(3)}>3</CalendarCellWeekend>
            <CalendarCell $isChoice={selectedDay === 4} onClick={() => handleDateSelect(4)}>4</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 5} onClick={() => handleDateSelect(5)}>5</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 6} onClick={() => handleDateSelect(6)}>6</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 7} onClick={() => handleDateSelect(7)}>7</CalendarCell>
            <CalendarCellCurrent $isChoice={selectedDay === 8} onClick={() => handleDateSelect(8)}>8</CalendarCellCurrent>
            <CalendarCellWeekend $isChoice={selectedDay === 9} onClick={() => handleDateSelect(9)}>9</CalendarCellWeekend>
            <CalendarCellWeekend $isChoice={selectedDay === 10} onClick={() => handleDateSelect(10)}>10</CalendarCellWeekend>
            <CalendarCell $isChoice={selectedDay === 11} onClick={() => handleDateSelect(11)}>11</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 12} onClick={() => handleDateSelect(12)}>12</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 13} onClick={() => handleDateSelect(13)}>13</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 14} onClick={() => handleDateSelect(14)}>14</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 15} onClick={() => handleDateSelect(15)}>15</CalendarCell>
            <CalendarCellWeekend $isChoice={selectedDay === 16} onClick={() => handleDateSelect(16)}>16</CalendarCellWeekend>
            <CalendarCellWeekend $isChoice={selectedDay === 17} onClick={() => handleDateSelect(17)}>17</CalendarCellWeekend>
            <CalendarCell $isChoice={selectedDay === 18} onClick={() => handleDateSelect(18)}>18</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 19} onClick={() => handleDateSelect(19)}>19</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 20} onClick={() => handleDateSelect(20)}>20</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 21} onClick={() => handleDateSelect(21)}>21</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 22} onClick={() => handleDateSelect(22)}>22</CalendarCell>
            <CalendarCellWeekend $isChoice={selectedDay === 23} onClick={() => handleDateSelect(23)}>23</CalendarCellWeekend>
            <CalendarCellWeekend $isChoice={selectedDay === 24} onClick={() => handleDateSelect(24)}>24</CalendarCellWeekend>
            <CalendarCell $isChoice={selectedDay === 25} onClick={() => handleDateSelect(25)}>25</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 26} onClick={() => handleDateSelect(26)}>26</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 27} onClick={() => handleDateSelect(27)}>27</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 28} onClick={() => handleDateSelect(28)}>28</CalendarCell>
            <CalendarCell $isChoice={selectedDay === 29} onClick={() => handleDateSelect(29)}>29</CalendarCell>
            <CalendarCellOtherMonthWeekend>1</CalendarCellOtherMonthWeekend>
          </CalendarCells>
        </CalendarContent>
        <CalendarPeriod>
          <CalendarPeriodP>
            {!date ? 'Выберите срок исполнения':'Срок исполнения:'} <span>{date}</span>.
          </CalendarPeriodP>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarS>
  );
};

export default Calendar;