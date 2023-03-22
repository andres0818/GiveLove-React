import React from 'react';
import moment from 'moment/min/moment-with-locales';
import 'moment/locale/es';
import Day from '../day/Day';

const Month = ({month}) => {
  moment.locale('es');
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-7 font-sans hover:font-serif">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Month;