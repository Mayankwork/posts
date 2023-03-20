import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        allitems:[],
        searchitems:[],
        viewpostid:false,
    },
    reducers:{
        additem:(state,action)=>{

            state.allitems= action.payload;
            state.searchitems= action.payload;
            
        },
        changeQuery:(state,action)=>{
            state.searchitems= action.payload;
        },
        newposts:(state,action)=>{
            state.allitems= action.payload;
            state.searchitems= action.payload;
            
        },
        
        
    }
})
export const { additem ,changeQuery,newposts}= appSlice.actions
export default appSlice.reducer;