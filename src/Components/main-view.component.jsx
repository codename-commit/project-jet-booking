import React from 'react'
import './main-view.styles.css'

export const MainView = ({plane,onSeat}) => {
    const seatColor = plane.status === "booked" ? '#70B4DC' : plane.status === "reserved" ? "#70B4DC" : "#2CD3A6"
    return(
    
        <div className='main-container' style={{backgroundColor:seatColor}} onClick={onSeat}>
            <h1> {plane.name}</h1>
        </div>
    )
}