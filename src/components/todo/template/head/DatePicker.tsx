import React from 'react';
import "antd/dist/antd.css";
import { DatePicker } from 'antd';
import moment from 'moment';

const DatePickerComponent = () => {
    const dateFormat = 'YYYY/MM/DD';
    return (
        <>
            <DatePicker defaultValue={moment("2021/08/20", dateFormat)} format={dateFormat} />
        </>
    )
}

export default DatePickerComponent
