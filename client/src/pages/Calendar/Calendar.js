import { React, Fragment, useState } from 'react';
import { getMonth } from './Util';
import CalendarHeader from '../../components/Calendar/CalendarHeader';
import Sidebar from '../../components/Calendar/Sidebar';
import Month from '../../components/Calendar/Month';
import './calendar.css';

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    return (
        <Fragment>
            <div className = 'h-screen flex flex-columns'>
                <CalendarHeader/>
                <div className = 'flex flex-1'>
                    <Sidebar/>
                    <Month month={currentMonth}/>
                </div>
            </div> 
        </Fragment>
    )
}

export default Calendar;