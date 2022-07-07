import React from 'react';
import { Row, Col } from 'reactstrap';

import { useCountdown } from '../../../utils/useCountDown';
import { setStringDateFormat } from '../../../utility'

const CountDown = ({ endTime }) => {
    const timeDiff = endTime* 1000 - new Date().getTime()
    const [days, hours, minutes, seconds] = useCountdown(endTime);
    if (timeDiff > 0) {
    }
    return (
        <div className="countdown-main">
            {timeDiff > 0 ? 
            (
                    <div id="countdown">
                        <ul>
                            <li>
                                <div className="dt-mn"><span id="days">{days}</span></div>days
                            </li>
                            <li>
                                <div className="dt-mn"><span id="hours">{hours}</span></div>Hours
                            </li>
                            <li>
                                <div className="dt-mn"><span id="minutes">{minutes}</span></div>Minutes
                            </li>
                            <li>
                                <div className="dt-mn"><span id="seconds">{seconds}</span></div>Seconds
                            </li>
                        </ul>
                    </div>
            ) : 
            (<h1 className='text-center'>IDO ended</h1>)}
        </div>
    )
}

export default CountDown;