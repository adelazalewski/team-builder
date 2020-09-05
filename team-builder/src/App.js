import React from 'react';
import background from './team-member.jpg';
import './App.css';
import styled from "styled-components";
import Form from "./components/form";
// import teamMembers from "./components/data";
import TeamMemberCard from "./components/cardTeamMember";


const Header = styled.header`
padding: 2rem;
font-size: 200%;
`;
const Wrapper = styled.div`
background-image: url(${background});
`;

function App() {
  return (
    <Wrapper className="App">
      <Header className="App-header">
        Join Your Dream Team
      </Header>
      <Form />
      <TeamMemberCard />
    </Wrapper>
  );
}

export default App;
