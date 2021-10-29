import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username:null,
    useremail:null
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setuser:(state,action)=>
        {
            state.username=action.payload.username
            state.useremail=action.payload.useremail
        },

        setuserlogout:(state)=>
        {
            state.username=null
            state.useremail=null
        }
    }
});

export const {
setuser,setuserlogout
} = UserSlice.actions

export const  selectusername=(state)=>{
    return state.user.username
}

export const selectuseremail=(state)=>{
    return state.user.useremail
}
export default UserSlice.reducer