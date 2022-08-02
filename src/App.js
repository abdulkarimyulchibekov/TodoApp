import { useState } from 'react';
import ListItem from './ListItem/ListItem';

function App() {
	const [todos, setTodos] = useState(
		JSON.parse(window.localStorage.getItem('todos')) || [],
	);
	const takeInputValue = (evt) => {
		if (evt.code === 'Enter') {
			const newTodo = {
				id: todos.at(-1)?.id ? todos.at(-1).id + 1 : 1,
				text: evt.target.value,
				isCompleted: false,
			};
			console.log(newTodo);
			setTodos([...todos, newTodo]);
			evt.target.value = '';
		}
	};

	localStorage.setItem('todos', JSON.stringify(todos));

	return (
		<div className='App'>
			<input
				className='input'
				type='text'
				onKeyUp={takeInputValue}
				placeholder='to Do ...'
			/>
			<ul className='list'>
				{todos.map((e) => (
					<ListItem item={e} key={e.id} todos={todos} setTodos={setTodos} />
				))}
			</ul>
		</div>
	);
}

export default App;
