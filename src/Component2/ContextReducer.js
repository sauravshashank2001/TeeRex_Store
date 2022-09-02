export default function cartReducer  (state, action){
    switch(action.type){

        case "ADD_TO_CART":
            return{...state,cart:[...state.cart, {...action.payload, qty: 1 }]};
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((c)=> c.id !== action.payload.id),
            };
        case "CHANGE_CART_QTY":
            return {...state,
                cart:state.cart.filter(c=>
                c.id===action.payload.id?(c.qty=action.payload.qty):c.quantity
                ),
            };
        
    }
}



export function productReducer(state,action){
    
    switch(action.type){
        case "FILTER_BY_RED":
            return { ...state, byRed: !state.byRed };
        case "FILTER_BY_BLUE":
            return { ...state, byBlue: !state.byBlue };
        case "FILTER_BY_GREEN":
            return { ...state, byGreen: !state.byGreen };
        case "FILTER_BY_MEN":
            return { ...state, byMen: !state.byMen };
        case "FILTER_BY_WOMEN":
            return { ...state, byWomen: !state.byWomen };
        case "FILTER_BY_PRICE1":
            return { ...state, byPrice1: !state.byPrice1 };
        case "FILTER_BY_PRICE2":
            return { ...state, byPrice2: !state.byPrice2 };
        case "FILTER_BY_PRICE3":
            return { ...state, byPrice3: !state.byPrice3 };
        case "FILTER_BY_POLO":
            return { ...state, byPolo: !state.byPolo };
        case "FILTER_BY_HOODIE":
            return { ...state, byHoodie: !state.byHoodie };
        case "FILTER_BY_BASIC":
            return { ...state, byBasic: !state.byBasic };
        case 'FILTER_BY_SEARCH':
            return {...state,searchQuery: action.payload};
        case "CLEAR_FILTERS":
            return{
                byRed:false
                ,byBlue:false
                ,byGreen:false
                ,byMen:false
                ,byWomen:false
                ,byPrice1:false
                ,byPrice2:false
                ,byPrice3:false
                ,byPolo:false
                ,byHoodie:false
                ,byBasic:false
                ,searchQuery:"",
            };

        default:
            return state;
    }




};



