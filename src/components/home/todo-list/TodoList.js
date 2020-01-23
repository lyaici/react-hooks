import React from 'react';
import './TodoList.scss';
import { TodoCard } from '../../utils';

const TodoList = ({ list, addTodo }) => {

  return(
    <div className="todo-list">
      {list.map((todo, index) => {
        return(
          <TodoCard todo={todo} key={index}></TodoCard>
        );
      })}
    </div>
  );
}

export default TodoList;