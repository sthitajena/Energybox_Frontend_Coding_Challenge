import React, { Fragment } from "react";

const TrainList = ({ trains }) => {


    return (
        <>
            <div style={{ textAlign: "center", marginLeft: '30%' }}>
                {trains.map((train) =>
                (

                    <Fragment key={train.TrainId} >
                        <div style={{ border: '1px solid grey', width: '600px' }}>
                            <div style={{ "backgroundColor": `${train.LineCode === "BL" ? 'lightBlue' : train.LineCode === "OR" ? 'orange' : train.LineCode === "RD" ? 'red' : train.LineCode === "GR" ? 'grey' : train.LineCode === "SV" ? 'silver' : train.LineCode === "YL" ? 'yellow' : ''}` }}>Train LineCode: {train.LineCode || "N/A"}</div>
                            <div>
                                <span style={{ "backgroundColor": `${train.CarCount > 0 && train.CarCount < 5 ? 'green' : train.CarCount > 5 ? 'pink' : ''}` }}>
                                    Train Cars:  {train.CarCount}
                                </span><br />
                                <span>Train Number: {train.TrainNumber}</span><br />
                                <span style={{ "backgroundColor": `${train.ServiceType === 'NoPassengers' ? 'orchid' : train.ServiceType === 'Normal' ? 'tan' : 'greenYellow'}` }}>
                                    Train Service: {train.ServiceType}
                                </span><br />
                            </div>
                        </div><br />

                    </Fragment>
                ))}
            </div>
        </>
    );
};


export default TrainList;