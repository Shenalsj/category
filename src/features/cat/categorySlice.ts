import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import Product from "./catTypes";


const initialState: {
    products: Product[],
    error?: AxiosError,
    loading: boolean,
    productsLength?: number,
    page?: number
    foundProducts?: Product[]
} = {
    products: [],
    loading: false,
}

export const filterByCategory = createAsyncThunk(
    'filterByCategory',
    async(category: string) => {
        try {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${category}`)
            const data: Product[] = response.data
            return data
        } catch(e) {
            const error = e as AxiosError
            console.log('Error with filtering by category', error.response?.status, error.message)
        }
    }
)

const categorySlice = createSlice(
    {
    name: 'productsSlice',
    initialState,
    reducers: {
        preservePagination: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        }

    },
        // async functions here, with all the three steps
        extraReducers: (builder) => {
            
           
            // FILTER BY CATEGORY
            builder.addCase(filterByCategory.fulfilled, (state, action) => {
                if(!(action.payload instanceof AxiosError)) {
                    return {
                        ...state,
                        loading: false,
                        foundProducts: action.payload
                    }
                } else {
                    return {
                        ...state,
                        loading: false,
                        error: action.payload
                    }
                }
            })
            builder.addCase(filterByCategory.pending, (state, action) => {
                return {
                    ...state,
                    loading: true
                }
            })
            builder.addCase(filterByCategory.rejected, (state, action) => {
                if (action.payload instanceof AxiosError) {
                    return {
                        ...state,
                        loading: false,
                        error: action.payload
                    }
                }
            })
        }
    }
) //createSlice returns {actions, reducer, ...}

const productsReducer = categorySlice.reducer // contains current value of property 'productReducer' in global state

export const { preservePagination } = categorySlice.actions
export default productsReducer
