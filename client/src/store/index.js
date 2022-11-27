import { configureStore } from '@reduxjs/toolkit'
import post from "./features/post"
export const store = configureStore({
  reducer: {
    post,
  },
})
