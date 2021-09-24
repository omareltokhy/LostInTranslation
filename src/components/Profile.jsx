import withUser from '../hoc/withUser';
import { useEffect, useState } from 'react'
import { LoginAPI } from '../api/LoginAPI';
import { useId } from '../context/IdContext'
import ProfileItem from './ProfileItem';

function Profile() {
	const [ items, setItems ] = useState([])
	const { id } = useId()

	useEffect(() => {
		LoginAPI.getTranslations(id).then(data => {
			setItems(data.translations)
		})
		.catch(error => {
			console.log(error)
		})
	}, [])
	
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
		</div>
	)
}

export default withUser(Profile)