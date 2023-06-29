import React from 'react'

const SignIn = function(props){
    return (
        <div>
            <h1>Sign In</h1>
            <form action="">
                <input 
                    onChange={(event) => props.signInInputUpdate(event)}
                    type="text" 
                    placeholder='Email' 
                    name='email'
                    value={props.auth.email}
                /> 
                <input 
                    onChange={(event) => props.signInInputUpdate(event)} 
                    type="text" 
                    placeholder='Password' 
                    name='password'
                    value={props.auth.password}
                />
                <button onClick={props.signIn}>Sign In</button>
            </form>
            <a onClick={props.toggleAuthView} href='#'>Create ccount</a>
        </div>
    )
}

export default SignIn