import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  value: number
}

const initialState: State = { value: 0 }

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { increment, setValue } = exampleSlice.actions
export default exampleSlice.reducer
