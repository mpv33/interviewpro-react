import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState('all');

  // Handle adding or editing a todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      if (editIndex !== null) {
        // Edit an existing todo
        const updatedTodos = [...todos];
        updatedTodos[editIndex].text = newTodo;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        // Add a new todo with pending status
        setTodos([...todos, { text: newTodo, completed: false }]);
      }
      setNewTodo('');
    }
  };

  // Handle editing a todo
  const handleEditTodo = (index) => {
    setNewTodo(todos[index].text);
    setEditIndex(index);
  };

  // Handle deleting a todo
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Handle toggling the status of a todo
  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Filter todos based on user selection
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed;
    }
    if (filter === 'pending') {
      return !todo.completed;
    }
    return true;
  });

  return (
    <div className=" max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg my-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Todo List</h1>

      {/* Input to add or edit a task */}
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a task..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddTodo}
          className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      {/* Todo list rendering */}
      <ul className="list-none space-y-2 mb-4">
        {filteredTodos.map((todo, index) => (
          <li
            key={index}
            className={`flex justify-between p-2 rounded-lg shadow-sm ${
              todo.completed ? 'bg-green-100' : 'bg-gray-100'
            }`}
          >
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
            <div className="flex space-x-4">
              <button
                onClick={() => toggleComplete(index)}
                className={`${
                  todo.completed
                    ? 'text-yellow-500 hover:text-yellow-600'
                    : 'text-green-500 hover:text-green-600'
                }`}
              >
                {todo.completed ? 'Mark Pending' : 'Mark Complete'}
              </button>
              <button
                onClick={() => handleEditTodo(index)}
                className="text-blue-500 hover:text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Filtering options */}
      <div className="flex justify-between">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
