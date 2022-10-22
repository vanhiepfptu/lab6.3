import { createSlice } from "@reduxjs/toolkit";
import UsersData from "../shared/ListOfUser";

const initialState = {
  value:UsersData,
}

export const usersSlice = createSlice({
  name:'users',
  initialState,
  reducer: {
    addUser: (state, action) => {

      console.log(action.payload);
      console.log(state);
    }
  } 
});


export const {addUser} = usersSlice.actions;
export default usersSlice.reducer;
