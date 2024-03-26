import React from 'react';
import { connect } from 'react-redux';

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.tasks.map(task => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList);