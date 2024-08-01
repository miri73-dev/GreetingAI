import { createSlice } from "@reduxjs/toolkit";

const initState = {data:null};

const dataServerSlice=createSlice({
    name:'dataServerSlice',
    initialState: initState,
    reducers:{
        postData: (state,action) => {
            state.data = action.payload;
            console.log("answer_____"+state.data);
        }
    }
})
export const {postData} = dataServerSlice.actions;
export default dataServerSlice.reducer;