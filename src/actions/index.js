const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    } 
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    } 
};

const isError = () => {
    return {
        type: 'ERROR'
    } 
};

const itemAddToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    } 
};

const itemDeleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    } 
};

const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
};

const isOrderAdded = () => {
    return {
        type: 'ORDER_ADDED'
    }
};

const clearOrderAdded = () => {
    return {
        type: 'ORDER_NOT_ADDED'
    }
};

const quantityPlus = (id) => {
    return {
        type: 'QUANTITY_PLUS',
        payload: id
    }
};

const quantityMinus = (id) => {
    return {
        type: 'QUANTITY_MINUS',
        payload: id
    }
}

export {
    menuLoaded,
    menuRequested,
    isError,
    itemAddToCart,
    itemDeleteFromCart,
    clearCart,
    isOrderAdded,
    clearOrderAdded,
    quantityPlus,
    quantityMinus
}