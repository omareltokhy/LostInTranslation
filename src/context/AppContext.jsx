import UserProvider from "./UserContext";
import IdProvider from "./IdContext";

const AppContext = ({children}) => {
	return (
		<UserProvider>
			<IdProvider>
				{children}
			</IdProvider>
		</UserProvider>
	)
}

export default AppContext