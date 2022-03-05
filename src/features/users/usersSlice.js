import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Ricky Spanish' },
    { id: '1', name: 'Laszlo Morphine' },
    { id: '2', name: 'Max Jets' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer 