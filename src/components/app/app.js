import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from '../pages/main-page';
import CartPage from '../pages/cart-page'
import AppHeader from '../app-header/app-header';
import MenuItem from '../pages/menu-item-page';
import './app.scss';

const App = ({ itemsCart }) => {
    let sum = 0;
    itemsCart.forEach(item => {
        sum += +item.price * +item.quantity;
    });

    return (
        <div className="app">
            <AppHeader total={sum} />
            <Route path='/' exact component={MainPage} />
            <Route path='/menu' exact component={MainPage} />
            <Route path='/cart' exact component={CartPage} />
            <Route path='/menu/:id' exact component={MenuItem} />
        </div>
    )
}

const mapStateToProps = ({ itemsCart }) => {
    return {
        itemsCart
    }
};

export default connect(mapStateToProps)(App);