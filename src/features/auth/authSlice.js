import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    error: null,
    user: {
        user: 'ken',
        email: 'noobieken@gmail.com',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
}

const authSlice = createSlice({
    name: 'auth',
    initialState
})

export default authSlice.reducer