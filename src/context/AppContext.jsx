import UserProvider from "./UserContext";
import IdProvider from "./IdContext";

// for data state handling
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