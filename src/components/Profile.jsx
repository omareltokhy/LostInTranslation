import withUser from '../hoc/withUser';
import { useEffect, useState } from 'react'
import { LoginAPI } from '../api/LoginAPI';

function Profile(props) {
	const [ items, setItems ] = useState([])

	useEffect(() => {
		this.props.parentCallback("Data from child");

		LoginAPI.getTranslations(1).then(items => {
			console.log(items)
			setItems(items)
		})
		.catch(error => {
			console.log(error)
		})
	}, [])
	
	return (
		<div className="profile">
			<h3>Profile page</h3>
			<ul>
				<li></li>
			</ul>
		</div>
	)
}

export default withUser(Profile)