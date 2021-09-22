import React, { useEffect } from 'react'
import { useUser } from '../context/UserContext'
import { useHistory } from "react-router-dom";

function Login() {
	const { user, setUser } = useUser()
  let history = useHistory()

  const handleLoginClick = () => {
    const username = document.getElementById('username').value
    setUser(username)
  }

  useEffect(() => {
    if (user !== '') {
      history.push('/translate')
    }  
  }, [ user, history ]) 

  return(
    <div className="login">
      <h1>Log in</h1>
      <label>
          <p>Username</p>
            <input type="text" id="username"/>
        </label>
        <div>
          <button onClick= { handleLoginClick }>Login</button>
        </div>
    </div>
  )
}

export default Login