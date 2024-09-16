import {createSlice} from '@reduxjs/toolkit';


const initialState ={


items:[],
totalAmount:0,




};

const cartSlice= createSlice({

    name: 'cart',
    initialState,

    reducer:{

        addToCart:(state,action)=>{

            const product= action.payload

            state.items.push(product)
            state.totalAmount +=product.price


        },

        removeFromCart:(state,action) =>{

            const productId= action.payload

            const product= state.items.find(item =>item.id===productId);

            if product {


                state.items= state.items.filter(item=>item.id !==productId)

                state.totalAmount -=product.price
            }



        },

    },





});

export const {addToCart, removeFromCart} =cartSlice.actions

export const selectCartItems= (state)= state.cart.items

export const selectTotalAmount=(state) = state.cart.totalAmount

export default cartSlice.reducer;