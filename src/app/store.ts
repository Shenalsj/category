import { configureStore,ThunkAction ,Action } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/product/productSlice";
import authReducer from '../features/auth/authSlice'
import categoryReducer from '../features/cat/categorySlice'


// const presistedReducer: Reducer<AppState> = presistReducer(presisConfig,rootReducer)

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productsReducer,
    auth:authReducer,
    categories: categoryReducer,
  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//for adding 
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;