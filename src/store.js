import { configureStore } from '@reduxjs/toolkit' 
import taskReducer from './rtk/taskSlice';

 const store = configureStore({
  reducer: {
    taskl: taskReducer
  },
})
export default store;