import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    array:[],
    page:0,
}

export const globalPostSlice = createSlice({
    name:"globalPost",
    initialState,
    reducers:{
        addPost:(state,action) =>{
            state.array = [...state.array,...action.payload.array];
        },
        emptyPost:(state) =>{
            state.array = [];
        },
        addPage:(state,action) =>{
            state.page = state.page + action.payload.page;
        }
    }
})

export const {addPost,emptyPost,addPage} = globalPostSlice.actions;