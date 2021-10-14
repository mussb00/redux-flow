import todolist from '../tododata/todo'

export const addTask = (e) => ({
    type: 'ADD_TASK',
    payload: {id: todolist.length + 1, task: e.target[0].value}
});

export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: taskId
});

