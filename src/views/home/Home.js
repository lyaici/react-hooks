import React, { useState, useEffect } from 'react';
import './Home.scss';
import { TodoList } from '../../components/home';
import { SearchBar, Button } from '../../components/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {

  const [todoList, setTodoList] = useState([]);
  const [finalTodoList, setFinalTodoList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setTodoList([
      { title: 'Test', message: 'This is a test message' },
      { title: 'Test2', message: 'This is a test message' },
      { title: 'Test3', message: 'This is a test message' },
      { title: 'Test4', message: 'This is a test message' },
      { title: 'Test', message: 'This is a test message' },
      { title: 'Test2', message: 'This is a test message' },
      { title: 'Test3', message: 'This is a test message' },
      { title: 'Test4', message: 'This is a test message' },
      { title: 'Test', message: 'This is a test message' },
      { title: 'Test2', message: 'This is a test message' },
      { title: 'Test3', message: 'This is a test message' },
      { title: 'Test4', message: 'This is a test message' },
    ]);
  }, []);

  useEffect(() => {
    const regex = new RegExp(search, 'i');
    setFinalTodoList(todoList.filter(todo => todo.title.match(regex)));
  }, [search, todoList]);

  const handleInput = (input) => {
    setSearch(input.target.value);
  }

  const addTodo = (todo) => {
    setTodoList({ ...todoList, todo });
  }

  return(
    <div className="home">
      <h1 className="title">Hi ! Here's your todos
        <span id="emoji" role="img" aria-label="rainbow"> 🌈</span>
      </h1>
      <div className="search">
        <SearchBar placeholder="Search a todo" input={handleInput}></SearchBar>
      </div>
      <div className="todos">
        <TodoList list={finalTodoList} add={addTodo}></TodoList>
      </div>
      <Button><FontAwesomeIcon className="fa" icon="plus" size="1x" color="#FFFFFF"/>Add a todo</Button>
    </div>
  );
}

export default Home;
