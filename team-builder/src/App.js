import React, { useState } from 'react';
import background from './team-member.jpg';
import './App.css';
import styled from "styled-components";
import Form from "./components/form";
import data from "./components/data"
import TeamMemberCard from "./components/cardTeamMember";


const Header = styled.header`
padding: 2rem;
font-size: 200%;
font-family: 'Lora', serif;
`;
const Wrapper = styled.div`
background-image: url(${background});
`;

function App() {
  const [teamMembers, setTeamMembers] = useState(data);

  const addNewTeamMember = (formData) => {
    const newTeamMember = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      joined: formData.joined
    }
    setTeamMembers([...teamMembers, newTeamMember]); //takes all the people and adds the new person to it
  }
  return (
    <Wrapper className="App">
      <Header className="App-header">
        Join Your Dream Team
      </Header>
      <Form addNewTeamMember={addNewTeamMember} />
      <TeamMemberCard teamMembers={teamMembers} />
    </Wrapper>
  );
}

export default App;
