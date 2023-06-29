import { useState } from 'react'
import './root.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {

  const [isSignIn, setIsSignIn] = useState(false)
  const [userData, setUserData] = useState([])
  const [formData, setFormData] = useState({email:'', password:''})

  function toggleAuthView(){
    setIsSignIn(!isSignIn)
    setFormData({ email: '', password: '' });
  }

  function inputUpdate(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
  }

  function submitForm(event) {
    event.preventDefault();
    if (formData.email && formData.password) {
      setUserData((prevUserData) => [...prevUserData, formData]);
    } else {
      console.error('input required')
    }
  }

  const authComponent = isSignIn ? (
      <SignIn toggleAuthView={toggleAuthView} />
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
