import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    isLoading: false,
    user: null,
};

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {
        try {
            // Perform the API call or registration logic here
            console.log(`Register User: ${user}`);
            

            return user;
        } catch (error) {
            // Handle any errors here
            // You can dispatch an action to update the state with the error
            console.error("Registration failed:", error);
            toast.error("Registration failed!");
            throw error; // Rethrow the error to be caught by the component
        }
    }
);

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        try {
            // Perform the API call or login logic here
            console.log(`Login User: ${user}`);
            
            // Replace the below with actual logic, this is just an example
            // const response = await userService.login(user);
            // return response.data;
            
            // For now, returning the user as a placeholder
            return user;
        } catch (error) {
            // Handle any errors here
            // You can dispatch an action to update the state with the error
            console.error("Login failed:", error);
            toast.error("Login failed!");
            throw error; // Rethrow the error to be caught by the component
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // You can define additional reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default userSlice.reducer;
