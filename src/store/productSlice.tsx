import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Product, ProductsState } from '../interfaces/appInterface';



const productsInitState: ProductsState = {
    isLoading: false,
    products: [],
}

const initialState: ProductsState = {
    ...productsInitState
}

export const productsSlice = createSlice({
    name: 'permissions',
    initialState,
    reducers: {
        onSetLoading: ( state, action: PayloadAction<boolean> ) => {
			state.isLoading = action.payload;
		},
        onLoadProducts: ( state, action: PayloadAction<Product[]> ) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        onAddProducts: ( state, action: PayloadAction<Product> ) => {
            state.isLoading = false;
            state.products.push( action.payload );
        },
        onDeleteProducts: ( state, action: PayloadAction<string> ) => {
            state.isLoading = false;
            state.products = state.products.filter( ( prod ) => prod.id !== action.payload );
        },
        onAEditProducts: ( state, action: PayloadAction<Product> ) => {
            state.isLoading = false;
            state.products = state.products.map( ( prod ) => 
                ( prod.id === action.payload.id ? { ...prod, ...action.payload } : prod )
            );
        },
    }
});

export const {
    onAddProducts,
    onAEditProducts,
    onDeleteProducts,
    onLoadProducts,
    onSetLoading,
} = productsSlice.actions;