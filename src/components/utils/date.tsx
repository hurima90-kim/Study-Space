const monthStr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const dayStr = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const nowDate = new Date();

export const getDate = () => {
    const month = monthStr[nowDate.getMonth()];
    const date = nowDate.getDate();
    const year = nowDate.getFullYear();
    
    return `${month} ${date}, ${year}`;
}

export const getDay = () => {
    const day = dayStr[nowDate.getDay()];

    return `${day}`;
}