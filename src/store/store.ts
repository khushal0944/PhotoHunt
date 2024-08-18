import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./query-store/querySlice";
// import themeReducer from "./theme-store/themeSlice";

export const store = configureStore({
    reducer : {
        queryStore : queryReducer,
        // theme : themeReducer
    }
})