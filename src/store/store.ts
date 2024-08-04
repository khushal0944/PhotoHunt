import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search-store/searchSlice";
// import themeReducer from "./theme-store/themeSlice";

export const store = configureStore({
    reducer : {
        search : searchReducer,
        // theme : themeReducer
    }
})