import React from "react";


const ColorCodes = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <span>Service Type color : NoPassengers, Normal, Unknown >>>  </span>
                <div style={{ backgroundColor: 'orchid', width: '1rem', height: '1rem', borderRadius: '0.25rem' }} ></div>
                <div style={{ backgroundColor: 'tan', width: '1rem', height: '1rem', borderRadius: '0.25rem' }} ></div>
                <div style={{ backgroundColor: 'greenYellow', width: '1rem', height: '1rem', borderRadius: '0.25rem' }} ></div>
            </div><br /><br />

            <div style={{ display: 'flex' }}>
                <span>Line code color : BL, OR, RD, GR, SV , YL >>>  </span>
                <div style={{ backgroundColor: 'lightBlue', width: '1rem', height: '1rem', borderRadius: '0.25rem' }} ></div>
                <div style={{ backgroundColor: 'orange', width: '1rem', height: '1rem', borderRadius: '0.25rem' }} ></div>
                <div style={{ backgroundColor: 'red', width: '1rem', height: '1rem', borderRadius: '0.25rem' }} ></div>
                <div style={{ backgroundColor: 'grey', width: '1rem', height: '1rem', borderRadius: '0.25rem' }} ></div>
                <div style={{ backgroundColor: 'silver', width: '1rem', height: '1rem', borderRadius: '0.25rem' }} ></div>
                <div style={{ backgroundColor: 'yellow', width: '1rem', height: '1rem', borderRadius: '0.25rem' }} ></div>

            </div><br /><br />

            <div style={{ display: 'flex' }}>
                <span>Car count color : CarCount gt 0 & lt 5 , CarCount gt 5 >>>  </span>
                <div style={{ backgroundColor: 'green', width: '1rem', height: '1rem', borderRadius: '0.25rem' }} ></div>
                <div style={{ backgroundColor: 'pink', width: '1rem', height: '1rem', borderRadius: '0.25rem' }} ></div>

            </div><br /><br />
        </>
    );
};

export default ColorCodes;