// import { createSlice } from "@reduxjs/toolkit";







// const gallerySlice= createSlice({
//     name:"gallery",
//     initialState:{
//         loa:false,
       
    
//          allPhotos:[],
//          photo:[]
        
       
// },

// reducers:{
//     // actions
//     setLoa:(state, action) => {
//         state.loa = action.payload;
//     },
  
//     setAllPhotos:(state, action) => {
//         state.allPhotos = action.payload;
//     },
//     setPhoto:(state, action) => {
//         state.photo = action.payload;
//     },
// },

// }
// );


// export const {setLoa,setAllPhotos,setPhoto} = gallerySlice.actions;
// export default gallerySlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    loa: false,       // Changed from 'loa' to more descriptive 'loading'
    allPhotos: [],        // Array of all gallery photos
    currentPhoto: null,   // Renamed from 'photo' for clarity
    // error: null           // Added error state
  },
  reducers: {
    // Set loading state
    setLoa: (state, action) => {
      state.loa = action.payload;
    },
    
    // Set all photos
    setAllPhotos: (state, action) => {
       state.allPhotos = action.payload; 
    //   state.error = null; // Clear any previous errors
    },
    
    // Set current photo
    setCurrentPhoto: (state, action) => {
      state.currentPhoto = action.payload;
    },
    
    // Set error
 
    
    // Reset state
    // resetGalleryState: (state) => {
    //   state.loading = false;
    //   state.allPhotos = [];
    //   state.currentPhoto = null;
    //   state.error = null;
    // }
  }
});

// Export actions
export const { 
  setLoa, 
  setAllPhotos, 
  setCurrentPhoto, 
//   setError,
//   resetGalleryState 
} = gallerySlice.actions;

// Export reducer
export default gallerySlice.reducer;