import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SortDirection = 'asc' | 'desc' | null

type TableState = {
  sort: { column: string | null; direction: SortDirection }
  filters: Record<string, string>
  columnVisibility: Record<string, boolean>
  realtimeEnabled: boolean
  modalOpen: boolean
  selectedToken: any | null
}

const initialState: TableState = {
  sort: { column: null, direction: null },
  filters: {},
  columnVisibility: { pair: true, price: true, change24: true, liquidity: true, status: true },
  realtimeEnabled: false,
  modalOpen: false,
  selectedToken: null,
}

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<{ column: string; direction: SortDirection }>) {
      state.sort = action.payload
    },
    setFilter(state, action: PayloadAction<{ key: string; value: string }>) {
      state.filters[action.payload.key] = action.payload.value
    },
    toggleColumn(state, action: PayloadAction<string>) {
      const key = action.payload
      state.columnVisibility[key] = !state.columnVisibility[key]
    },
    setRealtime(state, action: PayloadAction<boolean>) {
      state.realtimeEnabled = action.payload
    },
    openModal(state, action: PayloadAction<any>) {
      state.modalOpen = true
      state.selectedToken = action.payload
    },
    closeModal(state) {
      state.modalOpen = false
      state.selectedToken = null
    },
  },
})

export const { setSort, setFilter, toggleColumn, setRealtime, openModal, closeModal } = tableSlice.actions
export default tableSlice.reducer
