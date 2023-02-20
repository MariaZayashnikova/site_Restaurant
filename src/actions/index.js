const menuLoaded = (newMenu) => ({
    type: 'MENU_LOADED',
    payload: newMenu
});

const menuRequested = () => ({ type: 'MENU_REQUESTED' });

const isError = () => ({ type: 'ERROR' });

const itemAddToCart = (id) => ({
    type: 'ITEM_ADD_TO_CART',
    payload: id
});

const itemDeleteFromCart = (id) => ({
    type: 'ITEM_REMOVE_FROM_CART',
    payload: id
});

const clearCart = () => ({ type: 'CLEAR_CART' });

const isOrderAdded = () => ({ type: 'ORDER_ADDED' });

const clearOrderAdded = () => ({ type: 'ORDER_NOT_ADDED' });

const quantityPlus = (id) => ({
    type: 'QUANTITY_PLUS',
    payload: id
});

const quantityMinus = (id) => ({
    type: 'QUANTITY_MINUS',
    payload: id
});

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