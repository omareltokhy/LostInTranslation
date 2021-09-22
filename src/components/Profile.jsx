import withUser from '../hoc/withUser';


function Profile() {
	return (
		<h3>Profile page</h3>
	)
}

export default withUser(Profile)