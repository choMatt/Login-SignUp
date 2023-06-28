import React from 'react'


const SignUp = function(props) {
    return (
        <div>
            <h1>Sign Up</h1>
            <form 
                action=""
                noValidate
            >
                <input 
                    onChange={(e) => props.inputHandle(e)}
                    type="text" 
                    placeholder='Email' 
                    name='email'
                    required
                /> 
                <input 
                    onChange={(e) => props.inputHandle(e)}
                    type="password" 
                    placeholder='Password' 
                    name='password'
                    required
                /> 
                <button onClick={props.submit}>Sign Up</button>
            </form>
            <a onClick={props.clickFunction} href='#'>Already have an account? Sign In here</a>
        </div>
    )
}

export default SignUp