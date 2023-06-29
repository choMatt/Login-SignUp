import React from 'react'


const SignUp = function(props) {
    console.log(props)
    return (
        <div>
            <h1>Sign Up</h1>
            <form 
                action=""
                noValidate
            >
                <input 
                    onChange={(e) => props.inputUpdate(e)}
                    type="text" 
                    placeholder='Email' 
                    name='email'
                    value= {props.formData.email}
                    required
                /> 
                <input 
                    onChange={(e) => props.inputUpdate(e)}
                    type="password" 
                    placeholder='Password' 
                    name='password'
                    value= {props.formData.password}
                    required
                /> 
                <button onClick={props.submitForm}>Sign Up</button>
            </form>
            <a onClick={props.toggleAuthView} href='#'>Already have an account? Sign In here</a>
        </div>
    )
}

export default SignUp