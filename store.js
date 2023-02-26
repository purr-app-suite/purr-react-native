import {configureStore} from '@reduxjs/toolkit'
import businessReducer from './features/businessSlice'
import basketReducer from './features/basketSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        business: businessReducer
    },
})