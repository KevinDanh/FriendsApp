import { React, useState } from 'react';
import { getMonth } from './Util';
import CalendarHeader from '../../components/Calendar/CalendarHeader';
import Sidebar from '../../components/Calendar/Sidebar';
import Month from '../../components/Calendar/Month';

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    return (
        <React.Fragment>
            <div className = 'h-screen flex flex-columns'>
                <CalendarHeader/>
                <div className = 'flex flex-1'>
                    <Sidebar/>
                    <Month month={currentMonth}/>
                </div>
            </div> 
        </React.Fragment>
    )
}

export default Calendar;