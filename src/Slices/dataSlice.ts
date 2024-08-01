import { createSlice } from "@reduxjs/toolkit";
import dataInputs from '../Data/Data.json'

const initState = dataInputs;

const dataSlice=createSlice({
    name:'dataInputs',
    initialState: initState,
    reducers:{

    }
})
export default dataSlice.reducer;