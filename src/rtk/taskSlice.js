
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  taskList : [],
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state,action) => {
     
      state.taskList.push(action.payload)
      localStorage.setItem('taskList', JSON.stringify(state.taskList))

    },
    removeTask : (state,action) => {
     
        state.taskList = state.taskList.filter((_, index) => index !== action.payload);
        localStorage.setItem('taskList', JSON.stringify(state.taskList))

      }
  },
})

export const { addTask, removeTask } = taskSlice.actions
export default taskSlice.reducer