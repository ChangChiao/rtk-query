import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../store/userSlice';
import { userApi } from "./api/apiSlice";
export const store = configureStore({
  reducer: {
    [userApi.reducerPath] : userApi.reducer,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userApi.middleware),

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch