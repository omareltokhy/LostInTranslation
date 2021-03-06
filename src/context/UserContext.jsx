import React, { createContext, useContext, useState } from 'react';

// username state handler
const UserContext = createContext(null)

export const useUser = () => {
	return useContext(UserContext)
}

const UserProvider = ({ children }) => {
	const [ user, setUser ] = useState('')

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{ children }
		</UserContext.Provider>
	)
}

export default UserProvider