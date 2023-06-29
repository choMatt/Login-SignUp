import React from 'react'

const SignIn = function(props){
    return (
        <div>
            <h1>Sign In</h1>
            <form action="">
                <input type="text" placeholder='Email' /> 
                <input type="text" placeholder='Password' /> 
                <button>Sign In</button>
            </form>
            <a onClick={props.toggleAuthView} href='#'>Create ccount</a>
        </div>
    )
}

export default SignIn