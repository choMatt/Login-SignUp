import { useState } from 'react'
import './root.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  const [isSignIn, setIsSignIn] = useState(false)

  function clickHandler(){
    setIsSignIn(!isSignIn)
    setFormData({ email: '', password: '' });
  }

  const [accounts, setAccounts] = useState([])
  console.log(accounts)

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })
    
  function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.email && formData.password) {
      setAccounts(prevAccounts => [...prevAccounts, formData]);
    } else {
      console.error('input required')
    }
  }


  const authComponent = isSignIn ? (
      <SignIn clickFunction={clickHandler} />
    ) : (
      <SignUp
        clickFunction={clickHandler}
        inputHandle={handleChange}
        submit={handleSubmit}
      />
  );

  return (
    <main>
      {authComponent}
    </main>
  )
}

export default App
