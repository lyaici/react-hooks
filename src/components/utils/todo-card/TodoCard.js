import React from 'react';
import './TodoCard.scss';

const TodoCard = ({ todo }) => {

  const { title, message } = todo;
  
  return(
    <div className="todo-card">
      <h3>{ title }</h3>
      <span>{ message }</span>
    </div>
  );
}

export default TodoCard;