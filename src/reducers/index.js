const initialState = {
    menu: [],
    loading: true,
    error: false,
    itemsCart: [],
    orderAdded: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true,
            };
        case 'ERROR':
            return {
                ...state,
                error: true
            };
        case 'ITEM_ADD_TO_CART':
            let id = action.payload;
            let check = state.itemsCart.findIndex(item => item.id === id);
            if(check >= 0) {
                let itm = state.itemsCart[check];
                itm.quantity += 1;
                
                return {
                    ...state,
                    itemsCart: [
                        ...state.itemsCart.slice(0, check),
                        itm,
                        ...state.itemsCart.slice(check + 1)
                        
                    ] 
                };
            } else {
                let item = state.menu.find(item => item.id === id);
                let newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    quantity: 1
                };
                return {
                    ...state,
                    itemsCart: [
                        ...state.itemsCart,
                        newItem
                    ]
                };
        };
        case 'ITEM_REMOVE_FROM_CART':
            let idItem = action.payload;
            let itemIndex = state.itemsCart.findIndex(item => item.id === idItem);
            return {
                ...state,
                itemsCart: [
                    ...state.itemsCart.slice(0, itemIndex),
                    ...state.itemsCart.slice(itemIndex + 1)
                ]
            };
        case 'CLEAR_CART': 
            return {
                ...state,
                itemsCart: []
            };
        case 'ORDER_ADDED': 
            return {
                ...state,
                orderAdded: true
            };
        case 'ORDER_NOT_ADDED': 
            return {
                ...state,
                orderAdded: false
            };
        case 'QUANTITY_PLUS': 
            let itemId = action.payload;
            let index = state.itemsCart.findIndex(item => item.id === itemId);
            let NewItem = state.itemsCart[index];
            NewItem.quantity++;
            return {
                ...state,
                itemsCart: [
                    ...state.itemsCart.slice(0, index),
                    NewItem,
                    ...state.itemsCart.slice(index + 1)
                ]
            };
        case 'QUANTITY_MINUS':
            let ItemId = action.payload;
            let ind = state.itemsCart.findIndex(item => item.id === ItemId);
            let itemNew = state.itemsCart[ind];
            itemNew.quantity--;
            return {
                ...state,
                itemsCart: [
                    ...state.itemsCart.slice(0, ind),
                    itemNew,
                    ...state.itemsCart.slice(ind + 1)
                ]
            };

        default: return state;
    }
}

export default reducer;