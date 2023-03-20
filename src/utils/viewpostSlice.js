import { createSlice } from "@reduxjs/toolkit";

const viewpostSlice = createSlice({
    name:'viewpost',
    initialState:{
        viewpostid:false,
        viewpostarray:[],
    },
    reducers:{
       
        viewpost:(state,action)=>{
            state.viewpostid = action.payload
            
        },
        addviewpostarray:(state,action)=>{
            state.viewpostarray = action.payload
            
        
        }
    }
})
export const { viewpost,addviewpostarray}= viewpostSlice.actions
export default viewpostSlice.reducer;