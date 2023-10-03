// // addSlice.ts

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AppThunk } from '../../app/store'; // Import AppThunk from your app's store
// import { addProduct as addProductApi } from '../../app/api'; // Import your API function for adding a product

// // Define the initial state for your slice
// interface AddState {
//   // Define the shape of your state for adding a product
//   products: Product[]; // You can use an array to store the added products
// }

// const initialState: AddState = {
//   products: [], // Initialize with an empty array
// };

// // Create a slice
// const addSlice = createSlice({
//   name: 'add',
//   initialState,
//   reducers: {
//     // Define your 'addProduct' action
//     addProduct: (state, action: PayloadAction<Product>) => {
//       // Add the new product to your state
//       state.products.push(action.payload);
//     },
//     // ... other actions for adding products
//   },
// });

// // Export the 'addProduct' action creator
// export const { addProduct } = addSlice.actions;

// // Define and export an async thunk for adding a product
// export const addProductAsync = (
//   productData: Product
// ): AppThunk => async (dispatch) => {
//   try {
//     // Make an API request to add the product
//     const addedProduct = await addProductApi(productData);

//     // Dispatch the 'addProduct' action with the added product
//     dispatch(addProduct(addedProduct));
//   } catch (error) {
//     // Handle errors, e.g., dispatch an error action
//   }
// };

// // Export the reducer
// export default addSlice.reducer;


import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import Product from "../../features/cat/catTypes";


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