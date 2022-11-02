import { createStore } from 'redux';
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addTodo = text => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddTodo = text => {
  store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispatchAddTodo(toDo);
};

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.addEventListener('click', dispatchDeleteTodo);
    li.appendChild(btn);
  });
};

store.subscribe(paintTodos);

form.addEventListener('submit', onSubmit);
