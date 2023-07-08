import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    loading: false,
    countriesData: [],
    countryData: [],
    error: false,
    success: false,
    message: "",
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.success = false;
            state.error = false;
            state.message = "";
        }
    },
})

export default countriesSlice.reducer;