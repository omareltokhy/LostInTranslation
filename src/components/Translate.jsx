import React from 'react';
import withUser from '../hoc/withUser';

function Translate() {

	console.log('Translate.render')
	return (
		<h3>Translate page</h3>
	)
}

export default withUser(Translate)