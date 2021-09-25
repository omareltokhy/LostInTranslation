import withUser from '../hoc/withUser';
import { useEffect, useState } from 'react'
import { API } from '../api/API';
import { useId } from '../context/IdContext'
import { useUser } from '../context/UserContext'
import ProfileItem from './ProfileItem';
import { useHistory } from "react-router-dom";
import styles from './Profile.module.css';

function Profile() {
	const [ items, setItems ] = useState([])
	const { id, setId } = useId()
	const { user, setUser } = useUser()

	let history = useHistory()

	// logging out
	const handleLogoutClick = () => {
		setUser('')
		setId('')
	}

	// handler for child click event for deleting table rows and items
	const deleteButtonHandler = (index) => {		
		deleteClick(index)
	}

	// remove clicked item from items array, update api
	const deleteClick = (index) => {
		//const translations = items
	    const translations = [];
		//translations.splice(index, 1);

		const userTranslations = {
			id: id,
			translation: translations 
		}
		API.addTranslation(userTranslations).then(data => setItems(data.translations))
	}

	// if user state has been cleared, go to login page otherwise retrieve translations
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
		<div className={styles.container}>
			<div className={styles.profile}>
			<h1>Hello, {user}!</h1>
			<h3>Your recent translations</h3>
			{/*<table>
				<thead>
					<tr>		
						<th></th>
						<th></th>
					</tr>			
				</thead>
				<tbody>
					{ items.map((value,index) => 
						<ProfileItem key={index} data={{index: index, translation: value}} buttonClick={deleteButtonHandler} />) 
					}
				</tbody>
				</table>*/}
			<div className={styles.translationListContainer}>
			<ul className={styles.translationList}>{ items.map((value,index) => 
						<ProfileItem key={index} data={{index: index, translation: value}} />) 
					}</ul>
			</div>
			<button className={styles.deleteButton} onClick={ deleteButtonHandler }>Clear</button>
			<button className={styles.logoutButton} onClick= { handleLogoutClick }>Logout</button>
			</div>
		</div>
	)
}

export default withUser(Profile)