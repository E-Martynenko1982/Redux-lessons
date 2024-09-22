import { tasksListSelector } from "./tasks.selectors";
import * as tasksGateway from "./tasksGateway";


export const TASKS_LIST_RECEIVED = "TASKS_LIST_RECEIVED";

export const tasksListReceived = (tasksList) => {
  const action = {
    type: TASKS_LIST_RECEIVED,
    payload: {
      tasksList
    }
  }
  return action
};

export const getTasksList = () => {
  return (dispatch) => {  // Здесь мы возвращаем thunk-функцию
    tasksGateway.fetchTasksList()
      .then(tasksList => dispatch(tasksListReceived(tasksList)))
      .catch(error => {
        console.error('Failed to fetch tasks', error);
      });
  };
}

export const updateTask = (taskId) => {
  return (dispatch, getState) => {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find(task => Number(task.id) === taskId);

    const updatedTask = {
      ...task,
      done: !task.done
    };
    tasksGateway.updateTask(taskId, updatedTask)
      .then(() => dispatch(getTasksList()))
      .catch(error => {
        console.error('Failed to fetch tasks', error);
      });
  };
}

export const deleteTask = (taskId) => {
  return (dispatch) => {
    tasksGateway.deleteTask(taskId)
      .then(() => dispatch(getTasksList()))
      .catch(error => {
        console.error('Failed to fetch tasks', error);
      });
  };
}

export const createTask = (text) => {
  return (dispatch) => {
    const taskData = {
      text: text,
      done: false,
      createdAt: new Date().toISOString(),
    }
    tasksGateway.createTask(taskData)
      .then(() => dispatch(getTasksList()))
      .catch(error => {
        console.error('Failed to fetch tasks', error);
      });
  };
}
