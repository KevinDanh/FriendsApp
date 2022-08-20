import { React, Fragment, useState, useContext, useEffect } from 'react';
import { getMonth } from './Util';
import CalendarHeader from '../../components/Calendar/CalendarHeader';
import Sidebar from '../../components/Calendar/Sidebar';
import Month from '../../components/Calendar/Month';
import './calendar.css';
import GlobalContext from '../../components/Calendar/context/GlobalContext';
import EventModel from '../../components/Calendar/EventModel';

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModel } = useContext(GlobalContext);

    useEffect(() =>{
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex]);

    return (
        <Fragment>
            {showEventModel && <EventModel/>}
            <div className = 'h-screen flex flex-col'>
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