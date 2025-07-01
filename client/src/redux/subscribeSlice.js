import { createSlice } from "@reduxjs/toolkit";

const subscribeSlice= createSlice({
    name:"subscribe",
    initialState:{
        loadi:false,
        allSubscribers:[],
        subscribe:[]
        
       
},

reducers:{
    // actions
    setLoadi:(state, action) => {
        state.loadi = action.payload;
    },
     setSubscribe:(state, action) => {
        state.subscribe = action.payload;
    },
    setAllSubscribers:(state, action) => {
        state.allSubscribers = action.payload;
    },
   
},

}
);


export const {setLoadi,setAllSubscribers,setSubscribe} = subscribeSlice.actions;
export default subscribeSlice.reducer;