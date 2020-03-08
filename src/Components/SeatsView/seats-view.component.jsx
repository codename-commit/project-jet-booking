import React from 'react';
import './seats-view.styles.css' 

import {MainView} from '../main-view.component'

export const SeatsView = ({onForm, plane,onSeat}) => 
{

return (
    <div>
    <p>FRONT ROW</p>
    <div className='Seats-View'>
    {plane.map((plane, index) =>
    (
        <MainView key={plane.id} plane={plane} onSeat={() =>onSeat(index) }/>
    )
    )}</div>
    <p>TAIL</p>
    <button onClick={onForm}>FORM</button>
    </div>
// {/* <div className='Card-List'>{props.children}</div> */}
);
};