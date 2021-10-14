export const addTask = (payload) => ({
    type: 'ADD_TASK',
    payload
});

export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId
});

