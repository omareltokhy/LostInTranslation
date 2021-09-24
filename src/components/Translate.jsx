import React from 'react';
import withUser from '../hoc/withUser';
import TranslateToSignLanguage from './TranslateToSignLanguage';
import {LoginAPI} from '../api/LoginAPI'
import {useState} from 'react'
import { useId } from '../context/IdContext'

function Translate() {

	const [sentence, setSentence] = useState('');

	const { id, setId } = useId()

	const handleTranslateClick = () => {
		//const sentence = document.getElementById('sentence').value
		console.log(sentence)
		//TranslateToSignLanguage(sentence)

		const userTranslations = {
			id: id,
			translation: sentence
		}

		LoginAPI.addTranslation(userTranslations);
	}

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