import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
	const [techs, setTechs] = useState([]);
	const [newTech, setNewTech] = useState('');
	const techsSize = useMemo(() => techs.length, [techs]);

	const handleAdd = useCallback(() => {
		setTechs([...techs, newTech]);
		setNewTech('');
	}, [techs, newTech]);

	// Component didMount
	useEffect(() => {
		const storageTechs = localStorage.getItem('techs');

		if (storageTechs) {
			setTechs(JSON.parse(storageTechs));
		}

		//Component willUnmount
		return () => {
			console.log('Geralmente usado para remover eventListeners');
		};
	}, []);

	// Component didUpdate
	useEffect(() => {
		localStorage.setItem('techs', JSON.stringify(techs));
	}, [techs]);

	return (
		<>
			<ul>
				{techs.map(tech => (
					<li key={tech}>{tech}</li>
				))}
			</ul>

			<strong>Você têm {techsSize} tecnologias</strong>
			<br />

			<input
				type="text"
				value={newTech}
				placeholder="Nova técnologia"
				onChange={e => setNewTech(e.target.value)}
			/>

			<button type="button" onClick={handleAdd}>
				Adicionar
			</button>
		</>
	);
}

export default App;
