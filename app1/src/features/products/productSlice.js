import { createSlice } from "@reduxjs/toolkit";

const initialState={

products=[
{id:1, name:"Laptop", price: 1000},

{id:2 ,name:"Headphones", price:500},

{id:3 ,name:"Charger", price:250},



],




};


const productSlice=createSlice({

name='product',

initialState,

reducer:{},


});

export const selectAllProducts =(state)=>  state.product.products

export const productSlice.reducer;

