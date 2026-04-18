import React from "react";
import "./TodoList.css";

const TodoList = () => {
    const [todos, setTodos] = React.useState([]);
    const [input, setInput] = React.useState("");
    const [editIndex, setEditIndex] = React.useState(null);

    const addOrUpdateTask = () => {
        if (input.trim() === "") return;

        if (editIndex !== null) {
            const updated = [...todos];
            updated[editIndex].text = input;
            setTodos(updated);
            setEditIndex(null);
        } else {
            setTodos([...todos, { text: input, completed: false }]);
        }

        setInput("");
    };

    const deleteTask = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const editTask = (index) => {
        setInput(todos[index].text);
        setEditIndex(index);
    };

    const toggleComplete = (index) => {
        const updated = [...todos];
        updated[index].completed = !updated[index].completed;
        setTodos(updated);
    };

    const uppercaseOne = (index) => {
        const updated = [...todos];
        updated[index].text = updated[index].text.toUpperCase();
        setTodos(updated);
    };

    const lowercaseOne = (index) => {
        const updated = [...todos];
        updated[index].text = updated[index].text.toLowerCase();
        setTodos(updated);
    };

    return (
        <div className="container">
            <h2>📝 Todo List</h2>

            <div className="input-box">
                <input
                    type="text"
                    placeholder="Enter task..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button onClick={addOrUpdateTask}>
                    {editIndex !== null ? "Update" : "Add"}
                </button>
            </div>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className="task">
                        
                        <div className="left">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleComplete(index)}
                            />

                            <span className={todo.completed ? "done" : ""}>
                                {todo.text}
                            </span>
                        </div>

                        <div className="actions">
                            <button onClick={() => editTask(index)}>✏️</button>
                            <button onClick={() => uppercaseOne(index)}>🔠</button>
                            <button onClick={() => lowercaseOne(index)}>🔡</button>
                            <button onClick={() => deleteTask(index)}>🗑️</button>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;