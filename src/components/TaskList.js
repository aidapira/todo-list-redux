// TaskList.js

import React from 'react';
import { connect } from 'react-redux';

const TaskList = ({ taskList }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {taskList.tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    taskList: state.tasks // Assuming 'tasks' is the correct key for the tasks slice of the Redux state
  };
};

export default connect(mapStateToProps)(TaskList);
