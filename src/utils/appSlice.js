import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        allitems:[],
        searchitems:[],
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

            // console.log('inside newposts');
            // let modarr = state.searchitems;
            // console.log(modarr);
            // state.searchitems=[];
            // let newarr = state.allitems;
            //  console.log(newarr);
            // return;
            // state.searchitems= state.searchitems.push(action.payload);
            
        }
    }
})
export const { additem ,changeQuery,newposts}= appSlice.actions
export default appSlice.reducer;