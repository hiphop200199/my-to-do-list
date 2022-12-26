window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || [];
	//todos在這邊是全域變數
	const newTodoForm = document.querySelector('#new-todo-form');

	newTodoForm.addEventListener('submit', e => {
		//event物件包含了事件相關的所有資訊，target指向觸發事件的元素，currentTarget永遠指向有事件監聽器那一個元素
		e.preventDefault();
		const todo = {
			content: e.target.elements.content.value,
			done: false,
			createdAt: new Date().toLocaleString()
		}
		todos.push(todo);
		localStorage.setItem('todos', JSON.stringify(todos));
		// Reset the form
		e.target.reset();
		DisplayTodos();
	})

	DisplayTodos();
})

function DisplayTodos () {
	const todoList = document.querySelector('#todo-list');
	todoList.innerHTML = "";

	todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');
		const content = document.createElement('div');
		const editButton = document.createElement('button');
		const deleteButton = document.createElement('button');
		content.classList.add('todo-content');
		editButton.classList.add('editFile');
		deleteButton.classList.add('deleteFile');
		content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
		editButton.innerText = 'Edit';
		deleteButton.innerText = 'Delete';
		todoItem.appendChild(content);
		todoItem.appendChild(editButton);
		todoItem.appendChild(deleteButton);
		todoList.appendChild(todoItem);

		editButton.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayTodos();

			})
		})

		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos();
		})

	})
}