import dayjs from 'dayjs';

export function getMonth(month = dayjs().month()){      //recieves parameter month(0-11), but if not is set to a default value month
    const year = dayjs().year();                       // grabs the year that corresponds to current year
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();         //creates a new new dayjs function that represents the first day of the month and tells us what day it lands on. (0(sunday)-6(saturday).
    let currentMonthCount = 0 - firstDayOfTheMonth;         //counter that accurately sets the first day of the month, every new month wont start with Monday
    const daysMatrix = new Array(5).fill([]).map(() => {        //creates a 5x7 2 dimensional array that holds the days of the week (Mon-Fri)
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;                                //everytime the weeks fill a month, we are increasing out month count to enter new month
            return dayjs(new Date(year, month, currentMonthCount))  //returns a new month starting with the accurate day 

        })

    })
    console.log(daysMatrix);
    return daysMatrix;
}