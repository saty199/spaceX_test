import React from "react";
import imgPlaceholder from "../../assets/images/img-placeholder.jpg";

const Programs = (props) => {
    return (
        <>
            {props.programData.length > 0 ?
                <div className="launchProgram">
                    {props.programData.map((program, i) =>
                        <div className="programItem box-style" key={i} >
                            <div class="itemInner">    
                            <img src={program.links.mission_patch ? program.links.mission_patch : imgPlaceholder} alt="spaceX_launch_image" />
                                <h4>{program.mission_name} #{program.flight_number}</h4>
                                <h5>Mission Ids: </h5>
                                {program.mission_id.length > 0 ?
                                    <ul>
                                        {program.mission_id.map((id, i) => <li key={i}>{id}</li>)}
                                    </ul>
                                    : ''}
                                <h5>Lunch Year: <span>{program.launch_year}</span> </h5>
                                <h5>Successful Launch: <span>{program.launch_success ? "true" : "false"}</span></h5>
                                <h5>Successful Landing: <span>{program.rocket?.first_stage?.cores[0]?.land_success ? "true" : "false"}</span></h5>
                            </div>
                        </div>)}
                </div>
                : <h2 className="text-center">No Programs Found</h2>}

        </>
    )
}

export default Programs;