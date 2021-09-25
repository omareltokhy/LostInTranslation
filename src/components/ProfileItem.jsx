import withUser from '../hoc/withUser';
import styles from './Profile.module.css';

// table row component for profile page
function ProfileItem(props){
	return (
		<li className={styles.translationList}>{props.data.translation}</li>
	  )
} 

export default withUser(ProfileItem)
