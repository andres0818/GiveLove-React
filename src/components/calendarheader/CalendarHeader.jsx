import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment/min/moment-with-locales';
import 'moment/locale/es';
import GlobalContext from '../../context/GlobalContext';

const CalendarHeader = () => {
    moment.locale('es');
    const {monthIndex, setMonthIndex} = useContext(GlobalContext)
    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1);
    }
    function handleNextMonth() {
        setMonthIndex(monthIndex + 1);
    }
    function handleReset() {
        setMonthIndex(
          monthIndex === moment().month()
            ? monthIndex + Math.random()
            : moment().month()
        );
      }
    
    
    return (
    <headers className="px-4 py-2 flex items-center">
        <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
        <h1 className="mr-10 text-xl text-black fond-bold font-sans hover:font-serif">
            Calendario
        </h1>
        <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5 text-black font-sans hover:font-serif"
      >
        Hoy
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-black mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-black mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-black font-sans hover:font-serif ">
        {moment(new Date(moment().year(), monthIndex)).format(
          "MMMM [del] YYYY"
        )}
      </h2>
    </headers>
  );
}

export default CalendarHeader