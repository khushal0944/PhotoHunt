import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin : true,
    loginData : ""
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        changeSearch: (state, action)=>{
            state.isLogin = action.payload
        },
        resetSearch: (state)=>{
            state.loginData = ""
        }
    }
})

export const {changeSearch, resetSearch} = loginSlice.actions

export default loginSlice.reducer