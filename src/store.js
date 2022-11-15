import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) => {
      state.filter(todo => todo.id !== action.payload);
    },
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { addToDo, deleteToDo } = toDos.actions;

export default store;
