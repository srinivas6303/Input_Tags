import { createSlice } from "@reduxjs/toolkit";

const initialState={
    list: []
}
const Tag_Slice = createSlice({
    name:'tag',
    initialState,
    reducers:{
        'add':(state,action)=>{state.list.push(action.payload)},
        'remove':(state,action)=>{state.list=state.list.filter((_,i)=>i!==action.payload)}
    }
})

export const {add,remove}=Tag_Slice.actions;
export default Tag_Slice.reducer;