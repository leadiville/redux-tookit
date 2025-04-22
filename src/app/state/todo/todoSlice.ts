import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: 0
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state) => {
      state.value += 4;
    },
    removeTodo: (state) => {
      state.value -= 2;
    },
  },
});

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;