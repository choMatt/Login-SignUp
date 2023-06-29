import React from 'react'


const SignUp = function(props) {
    return (
        <div>
            <h1>Sign Up</h1>
            <form 
                action=""
            >
                <input 
                    onChange={(event) => props.inputUpdate(event)}
                    type="text" 
                    placeholder='Email' 
                    name='email'
                    value= {props.formData.email}
                /> 
                <input 
                    onChange={(event) => props.inputUpdate(event)}
                    type="password" 
                    placeholder='Password' 
                    name='password'
                    value= {props.formData.password}
                /> 
                <button onClick={props.submitForm}>Sign Up</button>
            </form>
            <a onClick={props.toggleAuthView} href='#'>Already have an account? Sign In here</a>
        </div>
    )
}

export default SignUp