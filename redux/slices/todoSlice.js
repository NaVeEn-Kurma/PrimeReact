import { createSlice } from "@reduxjs/toolkit";


const todoSlice=createSlice({
    name:'To-Do App',
    initialState:{
        list:[],
    },
    reducers:{
        addToList: (state,action)=>{
            return{...state,list:[...state.list,action.payload]} 
        },
        removeFromList:(state,action)=>{
            return state.list.index!=action.payload
        }
    }
})

export const {addToList,reducers}=todoSlice.actions;
export default todoSlice.reducer;