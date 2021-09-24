import React from 'react'
import { useUser } from '../context/UserContext'
import { Redirect } from 'react-router-dom'

// to handle authorization checks in components
const withUser = Component => props => {
	const { user } = useUser()

	if (user !== '') {	
		return <Component {...props} />
	} else {
		return <Redirect to='/' />
	}
}

export default withUser
