import React, { useState } from "react";
//import data from "./data";

const TeamMemberCard = (props) => {
    // const [teamMembers, setTeamMembers] = useState(data);
    console.log("props in TeamMemeberCard: ", props);
    return (
        <div className="teamMembers-list">
            <h1>Team Member's List</h1>
            {props.map((element, index) => {
                return(
                <div className="card" key={element.id}>
                    <h2>{element.name}</h2>
                    <p>{element.role}</p>
                    <p>Joined in: {element.joined}</p>
                </div>
            )})}
        </div>
    );
};

export default TeamMemberCard;