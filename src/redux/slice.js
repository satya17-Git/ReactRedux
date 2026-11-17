import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:0,
    items : JSON.parse(localStorage.getItem('cart')) || []
}

const addToCart = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            // state.value+=1;
            // console.log(action);
            state.items.push(action.payload);
            localStorage.setItem('cart',JSON.stringify(state.items));
            // console.log(state.items[0]);
        },
        removeItem:(state,action)=>{
        //    state.value > 0 ? state.value-=1:null;
           state.items = state.items.filter(x => x.id !== action.payload.id);
           localStorage.setItem('cart',JSON.stringify(state.items));
        //    console.log(state.items);
        },
        clearAllItem:(state)=>{
            state.items = [];
        }
    }
})


export const {addItem,removeItem,clearAllItem} = addToCart.actions;
export default addToCart.reducer;