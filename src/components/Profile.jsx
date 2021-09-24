import withUser from '../hoc/withUser';
import { useEffect, useState } from 'react'
import { LoginAPI } from '../api/LoginAPI';
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

	useEffect(() => {
		if(user === '') {
			history.push('/')
		} else {
			LoginAPI.getTranslations(id).then(data => {
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
						<ProfileItem key={index} data={{index: index, translation: value, userId: id, items: items}}  />) 
					}
				</tbody>
			</table>
			<button onClick= { handleLogoutClick }>Logout</button>
		</div>
	)
}

export default withUser(Profile)