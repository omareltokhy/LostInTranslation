import withUser from '../hoc/withUser';
import { useEffect, useState } from 'react'
import { API } from '../api/API';
import { useId } from '../context/IdContext'
import { useUser } from '../context/UserContext'
import ProfileItem from './ProfileItem';
import { useHistory } from "react-router-dom";

function Profile() {
	const [ items, setItems ] = useState([])
	const { id, setId } = useId()
	const { user, setUser } = useUser()

	let history = useHistory()

	const handleLogoutClick = () => {
		setUser('')
		setId('')
	}

	const deleteButtonHandler = (index) => {		
		deleteClick(index)
	}

	const deleteClick = (index) => {
		const translations = items
		translations.splice(index, 1);

		const userTranslations = {
			id: id,
			translation: translations 
		}
		API.addTranslation(userTranslations).then(data => setItems(data.translations))
	}

	useEffect(() => {
		if(user === '') {
			history.push('/')
		} else {
			
			API.getTranslations(id).then(data => {
				setItems(data.translations)
			})
			.catch(error => {
				console.log(error)
			})
		}

	}, [user])
	
	return (
		<div className="profile">
			<h3>Profile page</h3>
			<table>
				<thead>
					<tr>		
						<th>Translation</th>
						<th></th>
					</tr>			
				</thead>
				<tbody>
					{ items.map((value,index) => 
						<ProfileItem key={index} data={{index: index, translation: value}} buttonClick={deleteButtonHandler} />) 
					}
				</tbody>
			</table>
			<button onClick= { handleLogoutClick }>Logout</button>
		</div>
	)
}

export default withUser(Profile)