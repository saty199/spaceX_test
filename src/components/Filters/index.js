import React, { useState, useEffect } from "react";

const Filter = (props) => {

    const [launchYear, setlaunchYear] = useState([]);

    useEffect(() => {
        let currentYear = new Date().getFullYear(), years = [];
        let startYear = 2006;
        while (startYear <= currentYear) {
            years.push(startYear++);
        }
        setlaunchYear(years)
    }, [])

    return (
        <>
            <div className="box-style filterContainer">
                <h3>Filters</h3>

                {/* Launch Year */}
                <h5>Launch Year</h5>
                <ul>
                    {launchYear.map((item, i) => (
                        <li key={i}>
                            <input type="radio" id={i} name="launchYear" value={item} />
                            <label htmlFor={i} onClick={() => props.settingFilterDate(item)}>{item}</label>
                        </li>
                    ))}
                </ul>


                {/* Successful Launch */}
                <h5>Successful Launch</h5>
                <ul>
                    <li>
                        <input type="radio" id="launchTrue" name="successfulLaunch" value="false" />
                        <label htmlFor="launchTrue" onClick={() => props.settingLaunchSuccessful(true)}>True</label>
                    </li>
                    <li>
                        <input type="radio" id="launchFalse" name="successfulLaunch" value="true" />
                        <label htmlFor="launchFalse" onClick={() => props.settingLaunchSuccessful(false)}>False</label>
                    </li>
                </ul>


                {/* Successful Landing */}
                <h5>Successful Landing</h5>
                <ul>
                    <li>
                        <input type="radio" id="landingTrue" name="successfulLanding" value="false" />
                        <label htmlFor="landingTrue" onClick={() => props.settingLandingSuccessful(true)}>True</label>
                    </li>
                    <li>
                        <input type="radio" id="landingFalse" name="successfulLanding" value="false" />
                        <label htmlFor="landingFalse" onClick={() => props.settingLandingSuccessful(false)}>False</label>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Filter;