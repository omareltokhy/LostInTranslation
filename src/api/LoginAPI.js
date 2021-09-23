export const LoginAPI = {
    login(credentials) {
        return fetch('https://super-trivia-api.herokuapp.com/translations', {
            method: 'POST',
            headers: {
                'X-API-Key': 'fVvuHQrocVXC9G9z06xa3ec9rdXYGZyJZRDXJ9k3arjVxy2zuUXX6c34Z2dgnlx2',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: credentials, translations: []
             })
        }).then(async response => {
            if (!response.ok) {
                const { error = 'An unknown error occurred' } = await response.json()
                throw new Error(error)
            }
            return response.json()
        }).catch(error => {
            console.log(error)
        })
    },
	addTranslation (translationDetails) {
		const newTranslation = translationDetails.translation
        const apiURL = "https://super-trivia-api.herokuapp.com/translations"
        const apiKey = "fVvuHQrocVXC9G9z06xa3ec9rdXYGZyJZRDXJ9k3arjVxy2zuUXX6c34Z2dgnlx2"
        const requestOptions = {
            method: 'PATCH',
            headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ translations: [newTranslation] })
        }
	
		return fetch(`${apiURL}/trivia/${translationDetails.id}`, requestOptions)
		.then(response => {
			if (!response.ok) {
				throw new Error('Could not add translation')
			}
			return response.json()
		})
		.catch(error => {
			console.log(error)
		})
	},
    getTranslations(userId) {
        const apiURL = "https://super-trivia-api.herokuapp.com/translations"
        const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
        }
        return fetch(`${apiURL}/trivia/${userId}`, requestOptions)
		.then(response => {
			if (!response.ok) {
				throw new Error('Could not get translations')
			}
			return response.json()
		})
		.catch(error => {
			console.log(error)
		})
    }
}

