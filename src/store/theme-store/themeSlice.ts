import { createSlice } from "@reduxjs/toolkit";

type ThemeType = "light" | "dark"

interface InitialStateType {
    theme: ThemeType
}

// const initialTheme: ThemeType = JSON.parse(localStorage.getItem("theme")!) || "light"

const initialState: InitialStateType = {
    theme: "light"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = "light" ? "dark": "light"
            // localStorage.setItem("theme",JSON.stringify(state.theme))
        }
    }
})

export const {toggleTheme} = themeSlice.actions

export default themeSlice.reducer