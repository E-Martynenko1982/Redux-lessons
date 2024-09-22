import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Task from '../../Task';
import CreateClassInput from './CreateClassInput';
import * as tasksAction from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';


class TasksList extends Component {

  componentDidMount() {
    this.props.getTasksList()
  }

  render() {

    return (
      <>
        <h1 className='title'>Todo List</h1>
        <div className="todo-list">
          <CreateClassInput onCreate={this.props.createTask} />
          <ul className='list'>
            {this.props.tasks.map((task) => (
              <Task key={task.id}
                {...task}
                id={Number(task.id)}
                onDelete={this.props.deleteTask}
                onChange={this.props.updateTask}
              />
            ))}

          </ul>
        </div>
      </>


    );
  }
}

TasksList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
}

const mapDispatch = {
  getTasksList: tasksAction.getTasksList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
}

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state)
  }
}

export default connect(mapState, mapDispatch)(TasksList);