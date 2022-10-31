import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
};

const countStore = createStore(countReducer);

number.innerText = countStore.getState();

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener('click', () => {
  countStore.dispatch({ type: 'ADD' });
  onChange();
});

minus.addEventListener('click', () => {
  countStore.dispatch({ type: 'MINUS' });
  onChange();
});
