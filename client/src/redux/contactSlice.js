import { createSlice } from "@reduxjs/toolkit";







const contactSlice= createSlice({
    name:"contact",
    initialState:{
        load:false,
       
    
         allContacts:[],
         contact:[]
        
       
},

reducers:{
    // actions
    setLoad:(state, action) => {
        state.load = action.payload;
    },
  
    setAllContacts:(state, action) => {
        state.allContacts = action.payload;
    },
     setContact:(state, action) => {
        state.contact = action.payload;
    },
},

}
);


export const {setLoad,setAllContacts,setContact} = contactSlice.actions;
export default contactSlice.reducer;