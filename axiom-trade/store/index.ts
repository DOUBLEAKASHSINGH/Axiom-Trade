import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './slices/exampleSlice'
import tableReducer from './slices/tableSlice'

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    table: tableReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
