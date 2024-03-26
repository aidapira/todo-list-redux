export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export const editTask = (id, updatedTask) => {
    return {
        type: 'EDIT_TASK',
        payload: { id, updatedTask }
    }
}

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        payload: id
    }
}