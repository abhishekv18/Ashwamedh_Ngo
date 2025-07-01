import { createSlice } from "@reduxjs/toolkit";







const volunteerSlice= createSlice({
    name:"volunteer",
    initialState:{
        loadin:false,
       
    
         allVolunteers:[],
         volunteer:[]
        
       
},

reducers:{
    // actions
    setLoadin:(state, action) => {
        state.loadin = action.payload;
    },
  
    setAllVolunteers:(state, action) => {
        state.allVolunteers = action.payload;
    },
    setVolunteer:(state, action) => {
        state.volunteer = action.payload;
    },
},

}
);


export const {setLoadin,setAllVolunteers,setVolunteer} = volunteerSlice.actions;
export default volunteerSlice.reducer;