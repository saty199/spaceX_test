import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config";
import Filter from "../Filters/index";
import Programs from "../Programs/index";
import axios from "axios";

const Main = () => {
    const [program, setProgram] = useState([]);
    const [launchSuccess, setlaunchSuccess] = useState('');
    const [landingSuccess, setlandingSuccess] = useState('');
    const [launchDate, setlaunchDate] = useState('');
    const [dataLoad, setDataLoad] = useState(false)

    // launch successfull filter 
    const filterLaunchSuccessful = (value) => {
        setlaunchSuccess(value);
    }

    // launch successfull filter 
    const filterLandingSuccessful = (value) => {
        setlandingSuccess(value);
    }

    // launch date filter 
    const filterLaunchDate = (value) => {
        setlaunchDate(value);
    }


    useEffect(() => {
        // program data api call
        setDataLoad(true);
        axios
            .get(`${API_BASE_URL}launches?limit=100&launch_success=${launchSuccess}&land_success=${landingSuccess}&launch_year=${launchDate}`)
            .then(res => {
                setDataLoad(false);
                setProgram(res.data);
            }).catch(err => {
                setDataLoad(false);
                console.log(err);
            })
    }, [launchSuccess, landingSuccess, launchDate])


    return (
        <>
            <main>
                <header>
                    <h1>SpaceX Launch Programs</h1>
                </header>

                <section className="layoutContainer">
                    <aside>
                        <Filter
                            settingFilterDate={filterLaunchDate}
                            settingLaunchSuccessful={filterLaunchSuccessful}
                            settingLandingSuccessful={filterLandingSuccessful}
                        />
                    </aside>
                    <div className="programSection">
                        {!dataLoad ?
                            <Programs
                                programData={program}
                            /> : <h2 className="text-center">Loading Programs...</h2>}
                    </div>
                </section>

                <footer>
                    <h3>Created By : Satyam Agrawal</h3>
                </footer>
            </main>
        </>
    )
}

export default Main;
