import React from "react";
//import styled from "styled-components";
//import data from "./data";

// const CardDiv = styled.div`
// background: white;
// `;

const TeamMemberCard = (props) => {
    // const [teamMembers, setTeamMembers] = useState(data);
    //console.log("props in TeamMemeberCard: ", props);
    return (
        <div className="teamMembers-list">
            <h1>Team Member's List</h1>
            {props.teamMembers.map((element, index) => {
                return(
                <div className="card-div" key={index}>
                    <h2>{element.name}</h2>
                    <p>{element.role}</p>
                    <p>Joined in: {element.joined}</p>
                </div>
            )})}
        </div>
    );
};

export default TeamMemberCard;