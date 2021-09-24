import React, { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'
import { useId } from '../context/IdContext'
import { useHistory } from "react-router-dom";
import { API } from '../api/API'

function Login() {
	const { user, setUser } = useUser()
	const { id, setId } = useId()

  let history = useHistory()

  const handleLoginClick = () => {
    const input = document.getElementById('username').value
    setUser(input)
  }

  useEffect(() => {
    if (user !== '') {
      const result = API.login(user).then(data => setId(data.id))

      if(result) {
        history.push('/translate')
      }      
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