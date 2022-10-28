import React, { useState } from 'react';

const Todo = () => {
	const [inputData, setInputData] = useState('');
	const [items, setItems] = useState([]);

	const addItems = () => {
		setItems([...items, inputData]);
		setInputData('');
	};

	// const deleteItem = (id) => {
	// 	const newTasks = [...items];
	// 	newTasks.splice(id, 1);
	// 	setItems(newTasks);

	// 	//  console.log(id);
	// };

	const deleteItem = (id) => {
		console.log('clicked');

		setItems((oldItems) => {
			return oldItems.filter((arrElem, index) => {
				return index !== id;
			});
		});
	};
	return (
		<div>
			<h1> ToDo list </h1>
			<input
				type='text'
				value={inputData}
				onChange={(e) => setInputData(e.target.value)}
			/>
			<button onClick={addItems}> ADD </button>

			{items.map((elem, index) => {
				return (
					<div key={index}>
						<li>{elem}</li>
						<button onClick={() => deleteItem(index)}>
							delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Todo;
