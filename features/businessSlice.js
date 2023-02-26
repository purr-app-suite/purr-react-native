import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    business: {
        id: null,
        imgURL: null,
        title: null,
        rating: null,
        category: null,
        address: null,
        phone: null,
        short_description: null,
        long_description: null,
        services: null,
        reviews: null,
        long: null,
        lat: null
    },
}

export const businessSlice = createSlice({
    name: 'business',
    initialState,
    reducers: {
        setBusiness: (state, action) => {
            state.business = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setBusiness } = businessSlice.actions

//creating selectors
export const selectBusiness = (state) => state.business.business

export default businessSlice.reducer