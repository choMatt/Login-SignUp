import { useState } from 'react'
import './root.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'


function App() {

  const [isSignIn, setIsSignIn] = useState(false)
  const [formData, setFormData] = useState({email:'', password:''})
  const [userData, setUserData] = useState([])
  const [auth, setAuth] = useState({email:'', password: ''})


// Authentication component switcher.
  function toggleAuthView(){
    setIsSignIn(!isSignIn)
    setFormData({ email: '', password: '' });
  }

// Check for changes on the sign up input field and update the formData state.
  function inputUpdate(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
  }

// Move the data that was saved from the formData state to userData state.
  function submitForm(event) {
    event.preventDefault();
    if (formData.email && formData.password) {
      setUserData((prevUserData) => [...prevUserData, formData]);
    } else {
      console.error('input required')
    }

  }

// Check for changes on the sign in input field and update the auth state.
  function signInInputUpdate(event){
    const {name, value} = event.target
    setAuth((prevAuth) => {
      return {
        ...prevAuth,
        [name] : value
      }
    })

  }

// Check if the inputed data by the user exists on the userData array
// and return true if it exist else false.
  function signIn(event){
    event.preventDefault()
    const result = userData.some((data) => {
      return data.email === auth.email && data.password === auth.password;
    });
    console.log(result)
    return result
  }


  const authComponent = isSignIn ? (
      <SignIn 
        toggleAuthView={toggleAuthView}
        signInInputUpdate={signInInputUpdate}
        signIn={signIn}
        auth={auth}
      />
    ) : (
      <SignUp
        toggleAuthView={toggleAuthView}
        inputUpdate={inputUpdate}
        submitForm={submitForm}
        formData={formData}
      />
  );

  return (
    <main>
      {authComponent}
    </main>
  )
}

export default App
