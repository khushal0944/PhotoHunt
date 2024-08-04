import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: "nature"
    },
    reducers: {
        changeSearch: (state, action)=>{
            state.search = action.payload
        },
        resetSearch: (state)=>{
            state.search = ""
        }
    }
})

export const {changeSearch, resetSearch} = searchSlice.actions

export default searchSlice.reducer