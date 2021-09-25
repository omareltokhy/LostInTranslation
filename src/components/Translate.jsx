import React from 'react';
import withUser from '../hoc/withUser';
import TranslateToSignLanguage from './TranslateToSignLanguage';
import {API} from '../api/API'
import {useState, useEffect} from 'react'
import { useId } from '../context/IdContext'
import styles from './Translate.module.css'

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
		<div className={styles.container}>
		   <div className={styles.translate}>
		   <h2 className={styles.heading}>Enter a word or sentence to translate</h2>
		   <input className={styles.inputField} type="text" id="sentence" value = {sentence} onChange = {e => setSentence(e.target.value)}/>
		   <button onClick = {handleTranslateClick} className={styles.translateButton}>Translate</button>
		   <h2 className={styles.translationFor}>Translation for: {sentence}</h2>
		   <div className={styles.translationArea}>
		   <TranslateToSignLanguage data = { sentence }/>
		   </div>
		   </div>
		</div>
	)
}

export default withUser(Translate)