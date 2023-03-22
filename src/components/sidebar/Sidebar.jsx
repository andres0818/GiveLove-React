import React from 'react';
import moment from 'moment/min/moment-with-locales';
import 'moment/locale/es';
import CreateEventButton from '../createboton/CreateEventButton';
import SmallCalendar from '../smallcalendar/SmallCalendar';
import Labels from '../label/Labels';

const Sidebar = () => {
    moment.locale('es');
  return (
    <aside className="border p-5 w-64 font-sans hover:font-serif">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  )
}

export default Sidebar