import React, { useState } from "react";
import { connect } from 'react-redux';
import { addTask } from "../actions/taskActions";

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim() === '') return;
        addTask({ id: Date.now(), title})
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default connect(null, { addTask })(TaskForm)