import withUser from '../hoc/withUser';

function ProfileItem(props){
	return (
		<tr key={props.data.index}>
			<td>{props.data.translation}</td>
			<td><button onClick= { () => props.buttonClick(props.data.index) }>Delete</button></td>
		  </tr>
	  )
} 

export default withUser(ProfileItem)
