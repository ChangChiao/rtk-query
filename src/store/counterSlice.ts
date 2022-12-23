import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserList {
  name: string;
  city: string;
}

const initialState: UserList[] = []

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    setUserList: (state, action:PayloadAction<UserList[]>) => {
      state = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserList } = userListSlice.actions

export default userListSlice.reducer

//action 
export const fetchUserList = () => {
    return async (dispatch: (arg0: { payload: UserList[]; type: "userList/setUserList"; }) => void) => {
        const fetchData = async () => {
            const response = await fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8");
      
            if (!response.ok) {
              throw new Error("Fetch Fail!!!");
            }
      
            const data = await response.json();
            return data;
          };
      
          try {
            const userData = await fetchData();
            dispatch(userListSlice.actions.setUserList(userData));
          } catch (error) {}
    }
}
