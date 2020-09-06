import React, { useState } from 'react';

const Form = (props) => {
    console.log("form props: ", props);
    const [newPersonJoining, setNewPersonJoining] = useState({
        name: '',
        email: '',
        role: '',
    });
    const changeHandler = (e) => {
        setNewPersonJoining({
            ...newPersonJoining,
            [e.target.name]: e.target.value
        });
    };
    const submitForm = (e) => {
        e.preventDefault();
        props.addNewTeamMember(newPersonJoining);
        setNewPersonJoining({name: '', email: '', role: ''});
    }
    return(
        <form onSubmit={submitForm} >
            <label htmlFor="name">Enter your name</label>
            <input name="name" type="text" value={newPersonJoining.name} onChange={changeHandler} />

            <label htmlFor="email">Enter your email</label>
            <input name="email" type="text" value={newPersonJoining.email} onChange={changeHandler}/>

            <label htmlFor="role">Enter your domain</label>
            <input name="role" type="text" value={newPersonJoining.role} onChange={changeHandler}/>

            <button>Submit</button>
        </form>
    )
}

export default Form;