import React, { useState, useEffect } from "react";
import { getTrainPositions } from "../api/api";
import useFetchInInterval from "../hooks/useFetchInInterval";
import pageheadstyles from "../css/PageHead.module.css";


import LiveData from "../components/LiveData";
import TrainList from "../components/TrainList";
import Filter from "../components/Filter";
import ColorCodes from "../components/ColorCodes"


const Home = () => {

    const [trains, setTrains] = useState([]);

    const { data, loading, error, updating } = useFetchInInterval({
        request: getTrainPositions,
        intervalMS: 1000 * 10,
    });


    useEffect(() => {
        setTrains(data?.TrainPositions || []);
    }, [data]);



    const shouldRender = !loading && !error;

    const handleChange = (e) => {
        if (e.target.value === "") {
            setTrains(data?.TrainPositions || []);
        } else {
            setTrains(data?.TrainPositions.filter((train) => train.ServiceType === e.target.value));
        }

    }

    const handlelineColorChange = (e) => {
        if (e.target.value === "") {
            setTrains(data?.TrainPositions || []);
        } else {
            setTrains(data?.TrainPositions.filter((train) => train.LineCode === e.target.value));
        }
    }

    const handlecarCountChange = (e) => {
        if (e.target.value === "") {
            setTrains(data?.TrainPositions || []);
        } else {
            setTrains(data?.TrainPositions.filter((train) => train.CarCount === parseInt(e.target.value)));
        }
    }



    return (
        <>
            <div className={pageheadstyles.pagehead}>
                <div className={pageheadstyles.pagehead__content}>
                    <h1 className={pageheadstyles.pagehead__content__title}>{"All Trains"}</h1>
                    {shouldRender && <LiveData updating={updating} />}
                </div>
            </div><br />

            <ColorCodes />

            <div>
                <Filter trains={trains} handleChange={handleChange}
                    handlelineColorChange={handlelineColorChange}
                    handlecarCountChange={handlecarCountChange} />
            </div>


            {!error ? (
                !loading ? (
                    <div>
                        <TrainList trains={trains} />
                    </div>
                ) : (
                    <>Loading Train Positions.</>
                )
            ) : (
                <>There was an error. Please refresh or try again later.</>
            )}

        </>
    );
};




export default Home;