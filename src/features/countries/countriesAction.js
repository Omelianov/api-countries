import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// show all countries

export const showAllCountries = createAsyncThunk('countries/showAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        return response.data;


    } catch (err) {
        const message = (err.response && err.response.data) || err.message;

        // rejectWithValue sends the error message as a payload
        return thunkAPI.rejectWithValue(message);


    }
});
