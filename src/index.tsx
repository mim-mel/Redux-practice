import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import counter from './reducers';

const store = createStore(counter);
//store안에 미리 만들어 둔 reducer를 넣어줌

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const render = ()=>{
  root.render(
    <React.StrictMode>
      <App 
        value={store.getState()}
        onIncrement = {()=>store.dispatch({type:'INCREMENT'})}
        onDecrement = {()=>store.dispatch({type:'DECREMENT'})}
      />
    </React.StrictMode>
  )
}

render();
store.subscribe(render)

