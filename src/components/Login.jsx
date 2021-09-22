import React, { useEffect } from 'react'
import { useUser } from '../context/UserContext'
import { useHistory } from 'react-router-dom'

function Login() {
	const { user, setUser } = useUser()
  const history = useHistory()

  const handleLoginClick = () => {
    console.log(user)
  }

  useEffect(() => {
    if (user !== '') {
      history.push('/translate')
    }  
  }, [ user ])

  return(
    <div className="login">
      <h1>Log in</h1>
      <form>
        <label>
          <p>Username</p>
            <input type="text" onChange={e => setUser(e.target.value)}/>
        </label>
        <div>
          <button onClick= { handleLoginClick }>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login