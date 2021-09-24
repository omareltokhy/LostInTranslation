import React from 'react';
import withUser from '../hoc/withUser';
import TranslateToSignLanguage from './TranslateToSignLanguage';
import {API} from '../api/API'
import {useState, useEffect} from 'react'
import { useId } from '../context/IdContext'

function Translate() {
	const [sentence, setSentence] = useState('');
	const [ items, setItems ] = useState([])
	const { id } = useId()

	// on translate button click, get all translations and set state
	const handleTranslateClick = () => {
		API.getTranslations(id).then(data => {
			setItems(data.translations)
		})
		.catch(error => {
			console.log(error)
		})
	}

	// on item array change check if input is available, then add new translation
	useEffect(() => {
		const input = document.getElementById('sentence').value

		if(input !== '') {
			let newItems = items
			newItems.push(sentence)
	
			const userTranslations = {
				id: id,
				translation: newItems
			}
			API.addTranslation(userTranslations);	
		}
	 }, [ items ]) 

	console.log('Translate.render')
	return (
		<div>
		   <h1>Translate page</h1>
		   <label>Enter a sentence:</label>
		   <input type="text" id="sentence" value = {sentence} onChange = {e => setSentence(e.target.value)}/>
		   <button onClick = {handleTranslateClick}>Translate</button>
		   <h2>Translation:</h2>
		   <TranslateToSignLanguage data = { sentence }/>
		</div>
	)
}

export default withUser(Translate)