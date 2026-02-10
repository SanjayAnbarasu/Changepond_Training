import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5555/product";

export const fetchData = createAsyncThunk("api/fetchData", async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const updateProduct = createAsyncThunk("api/updateProduct", async ({ id, updatedData }) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data; 
});

export const deleteProduct = createAsyncThunk("api/deleteProduct", async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id; 
});

const apiSlice = createSlice({
    name: "api",
    initialState: { data: [], status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.data.findIndex((p) => p.id === action.payload.id);
                if (index !== -1) {
                    state.data[index] = action.payload;
                }
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.data = state.data.filter((p) => p.id !== action.payload);
            });
    }
});

export default apiSlice.reducer;
