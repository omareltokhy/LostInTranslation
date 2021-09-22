const apiURL = "https://super-trivia-api.herokuapp.com/translations"
const apiKey = "fVvuHQrocVXC9G9z06xa3ec9rdXYGZyJZRDXJ9k3arjVxy2zuUXX6c34Z2dgnlx2"
const requestOptions = {
  method: '',
  headers: {
    'X-API-Key': apiKey,
    'Content-Type': 'application/json'
  },
  body: ''
}

export const LoginAPI = {
    login(credentials) {
        return fetch(apiURL, {
            method: 'POST',
            body: JSON.stringify(credentials)
        }).then(async response => {
            if (!response.ok) {
                const { error = 'An unknown error occurred' } = await response.json()
                throw new Error(error)
            }
            return response.json()
        })
    },
	addTranslation (translationDetails) {
		const newTranslation = translationDetails.user.translation
		requestOptions.method = 'PATCH'
		requestOptions.body = JSON.stringify({ translations: newTranslation })
	
		return fetch(`${apiURL}/trivia/${translationDetails.user.id}`, requestOptions)
		.then(response => {
			if (!response.ok) {
				throw new Error('Could not add translation')
			}
			return response.json()
		})
		.catch(error => {
			console.log(error)
		})
	}
}

