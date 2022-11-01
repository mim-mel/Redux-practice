import { createStore } from 'redux';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const createTodo = toDo => {
  const li = document.createElement('li');
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  createTodo(toDo);
};

form.addEventListener('submit', onSubmit);
