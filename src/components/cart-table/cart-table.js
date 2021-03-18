import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {itemDeleteFromCart, clearCart, isOrderAdded, clearOrderAdded, isError, quantityPlus, quantityMinus} from '../../actions';
import AddOrder from '../../services/send-an-order-service';
import Error from '../error/error';

const CartTable = ({itemsCart, itemDeleteFromCart, clearCart, orderAdded, isOrderAdded, clearOrderAdded, isError, error, quantityPlus, quantityMinus}) => {
    let addOrderService = new AddOrder();

    const ButtonAdd = () => {
        return  <div className="cart__to_order"
        onClick={() => {
            let data = itemsCart.map(item => {
                return {
                    title: item.title,
                    price: item.price,
                    quantity: item.quantity
                }
            });
            
            addOrderService.postOrder(data)
                .then(() => {
                    clearCart(); 
                    isOrderAdded();
                })
                .catch(() => isError());
        }}>Order</div>
    };

    let btn = (itemsCart.length > 0) ? <ButtonAdd /> : null;
    let message = (orderAdded) ? <div className="cart__message">Заказ успешно добавлен!</div> : null;
    let errorMessage = (error) ? <Error/> : null;

    setTimeout(clearOrderAdded, 3000);

    return (
        <div>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    itemsCart.map(item => {
                        const {title, price, url, id, quantity} = item;
                        let total = price * quantity;

                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div className="cart__item-container-quantity">
                                    <div
                                         className="cart__item-counter"
                                         onClick={() => {
                                             if(quantity === 1) {
                                                itemDeleteFromCart(id);
                                             } else {
                                                quantityMinus(id);
                                             }
                                         }}>-</div>
                                    <div className="cart__item-quantity">{quantity}</div>
                                    <div 
                                        className="cart__item-counter"
                                        onClick={() => quantityPlus(id)}>+</div>
                                </div>
                                <div className="cart__item-totalsum">total: {total}$</div>
                                <div onClick={() => itemDeleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
           {btn}
           {message}
           {errorMessage}
        </div>
    );
};

const mapStateToProps = ({itemsCart, orderAdded, error}) => {
    return {
        itemsCart,
        orderAdded,
        error
    }
};

const mapDispatchToProps = {
    itemDeleteFromCart,
    clearCart,
    isOrderAdded,
    clearOrderAdded,
    isError,
    quantityPlus,
    quantityMinus
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);