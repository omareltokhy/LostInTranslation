import React, { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'
import { useId } from '../context/IdContext'
import { useHistory } from "react-router-dom";
import { API } from '../api/API'
import styles from './Login.module.css'

function Login() {
	const { user, setUser } = useUser()
	const { id, setId } = useId()

  let history = useHistory()

  // set username state
  const handleLoginClick = () => {
    const input = document.getElementById('username').value
    setUser(input)
  }

  // on user name change add user and go to translate page
  useEffect(() => {
    if (user !== '') {
      const result = API.login(user).then(data => setId(data.id))

      if(result) {
        history.push('/translate')
      }      
    }  
  }, [ user, history ]) 

  return(
    <div className={styles.container}>
    <div className={styles.login}>
      <h2>Welcome to</h2>
      <h1 className={styles.boxText}>Lost In Translation</h1>
      <label>
          <p className={styles.askForInput}>What's your name?</p>
            <input className={styles.inputField} type="text" id="username"/>
        </label>
        <div>
          <button className={styles.loginButton} onClick= { handleLoginClick }>Login</button>
        </div>
    </div>
    </div>
  )
}

export default Login