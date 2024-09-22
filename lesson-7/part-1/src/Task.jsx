import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ id, done, text = '', onChange, onDelete }) => {
  return (

    < >
      <li className={`list-item${done ? ' list-item_done' : ''}`}>
        <input
          type="checkbox"
          id={`task-checkbox-${id}`}
          className="list-item__checkbox"
          checked={done}
          onChange={() => onChange(id)}
        />
        {text}
        <button
          className="list-item__delete-btn"
          onClick={() => onDelete(id)}
          id={`delete-btn-${id}`}
        />
      </li>
    </>
  );
}

Task.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
