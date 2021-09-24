import withUser from '../hoc/withUser';
import { API } from '../api/API'

function ProfileItem(props){

	const deleteClick = () => {
		const translations = props.data.items
		translations.splice(props.data.index, 1);
		
		const userTranslations = {
			id: props.data.userId,
			translation: translations 
		}
		API.addTranslation(userTranslations)
	}

	return (
		<tr key={props.data.index}>
			<td>{props.data.translation}</td>
			<td><button onClick= { deleteClick }>Delete</button></td>
		  </tr>
	  )
} 

export default withUser(ProfileItem)