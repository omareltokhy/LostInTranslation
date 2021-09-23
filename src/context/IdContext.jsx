import React, { createContext, useContext, useState } from 'react';

const IdContext = createContext(null)

export const useId = () => {
	return useContext(IdContext)
}

const UserProvider = ({ children }) => {
	const [ id, setId ] = useState('')

	return (
		<IdContext.Provider value={{ id, setId }}>
			{ children }
		</IdContext.Provider>
	)
}

export default UserProvider