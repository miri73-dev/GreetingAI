import { createSlice } from "@reduxjs/toolkit";

const initState = {
    Event: '',
    Detail:'',
    Writing:'',
    Atmosphere:'',
    Style:''
}

const clickInputSlice=createSlice({
    name:'dataInputs',
    initialState: initState,
    reducers:{
          setEvent: (state, action) => {
            state.Event = action.payload;
            console.log(`----event: ${action.payload}----`);            
          },
          setDetail: (state, action) => {
            state.Detail = action.payload;
            console.log(`----Detail: ${action.payload}----`);            
          },
          setWriting: (state, action) => {
            state.Writing = action.payload;
            console.log(`----Writing: ${action.payload}----`);            
          },
          setAtmosphere: (state, action) => {
            state.Atmosphere = action.payload;
            console.log(`----Atmosphere: ${action.payload}----`);            
          },
          setStyle: (state, action) => {
            state.Style = action.payload;
            console.log(`----Style: ${action.payload}----`);            
          },
    }
})
export const { setEvent, setDetail, setWriting, setAtmosphere, setStyle} = clickInputSlice.actions;
export default clickInputSlice.reducer;