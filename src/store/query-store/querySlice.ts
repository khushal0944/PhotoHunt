import { createSlice } from "@reduxjs/toolkit";

interface QueryType {
    query: string
}

const initialState: QueryType = {
    query: "Trending"
}

const querySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        changeQuery: (state, action)=>{
            state.query = action.payload
        },
        resetQuery: (state)=>{
            state.query = ""
        }
    }
})

export const {changeQuery, resetQuery} = querySlice.actions

export default querySlice.reducer