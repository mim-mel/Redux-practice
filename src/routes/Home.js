import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToDo from '../components/ToDo.js';
import { addToDo } from '../store.js';

const Home = () => {
  const toDosState = useSelector(state => state);
  const dispatch = useDispatch();

  const [Text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setText('');
    dispatch(addToDo(Text));
  };

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={Text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDosState.map((toDo, i) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
