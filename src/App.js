import React, { useState } from 'react';

function App() {
	const [techs, setTechs] = useState(['ReactJS', 'ReactNative']);
	const [newTech, setNewTech] = useState('');

	function handleAdd() {
		setTechs([...techs, newTech]);
		setNewTech('');
	}

	return (
		<>
			<ul>
				{techs.map(tech => (
					<li key={tech}>{tech}</li>
				))}
			</ul>

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
