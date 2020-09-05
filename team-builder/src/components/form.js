import React from 'react';

const Form = () => {
    return(
        <form>
            <label htmlFor="name">Enter your name</label>
            <input name="name" type="text" />
            <label htmlFor="email">Enter your email</label>
            <input name="email" type="text" />

            <label htmlFor="role">Enter your domain</label>
            <input name="role" type="text" />

            <button>Submit</button>
        </form>
    )
}

export default Form;