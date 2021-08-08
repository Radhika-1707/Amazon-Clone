export const initialState = {
    basket: [],
    user:null

};
export const getBasketTotal = (basket) =>   // getbasketFunction taking basket
    basket?.reduce((amount, item) => item.price + amount, 0);  // this will tally up the total
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,     //returning original state
                basket: [...state.basket, action.item],    //changing the basket to original + action taken on basket
            };
        
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            };
        case "REMOVE_FROM_BASKET":
            const index =state.basket.findIndex( // find index of the id first then delete
                (basketItem) => basketItem.id===action.id
            );
            let newBasket=[...state.basket];
            if (index>=0){   //item to be deleted found in the basket
                newBasket.splice(index,1);  //find the element and delete it
            } else {
                console.warn(`can't remove product(id:${action.id}as it's not in baskket!`)
            }
            return {
                ...state,
                basket: newBasket
            }
            
            case "SET_USER":
                return{
                    ...state,
                    user: action.user
                }
            default:
                return state;
    }

};

export default reducer;
