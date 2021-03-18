import React from 'react';
import MainPage from '../pages/main-page';
import CartPage from '../pages/cart-page'
import AppHeader from '../app-header/app-header';
import './app.scss';
import {Route} from 'react-router-dom';
import MenuItem from '../pages/menu-item-page';
import {connect} from 'react-redux'; 

const App = ({itemsCart}) => {
    let sum = 0;
    itemsCart.map(item => {
        let totalSum = +item.price * +item.quantity;
        sum += totalSum;
    });

    return (
        <div className="app">
            <AppHeader total={sum}/>
            <Route path='/' exact component={MainPage}/>
            <Route path='/menu' exact component={MainPage} />
            <Route path='/cart' exact component={CartPage} />
            <Route path='/menu/:id' exact component={MenuItem}/>
        </div>
    )
}

const mapStateToProps = ({itemsCart}) => {
    return {
        itemsCart
    }
};

export default connect(mapStateToProps)(App);