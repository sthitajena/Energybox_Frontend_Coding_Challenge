import React, { useState, useEffect } from "react";


const Filter = ({ trains, handleChange, handlelineColorChange, handlecarCountChange }) => {


    const [servicetype, setServicetype] = useState([]);
    const [lineColor, setLineColor] = useState([]);
    const [carCount, setCarCount] = useState([]);


    useEffect(() => {
        if (trains != null && servicetype == "") {
            const cats = [...new Set(trains.map(q => q.ServiceType))];
            setServicetype(cats);

        }
        if (trains != null && lineColor == "") {
            const cats = [...new Set(trains.map(q => q.LineCode))];
            setLineColor(cats);

        }
        if (trains != null && carCount == "") {
            const cats = [...new Set(trains.map(q => q.CarCount))];
            setCarCount(cats);

        }
    }, [trains]);



    return (
        <>
            <div style={{ marginLeft: '5px', marginBottom: '20px' }}>
                <div style={{ display: "flex" }}>
                    <div>Select ServiceType:</div>
                    <div>
                        <select onChange={handleChange}>
                            <option value="">---Select---</option>
                            {servicetype.map((type) => (
                                <option value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div>Select lineColor:</div>
                    <div>
                        <select onChange={handlelineColorChange}>
                            <option value="">---Select---</option>
                            {lineColor.map((type) => (
                                <option value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div>Select car count:</div>
                    <div>
                        <select onChange={handlecarCountChange}>
                            <option value="">---Select---</option>
                            {carCount.map((type) => (
                                <option value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filter;