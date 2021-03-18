import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc/with-resto-service';
import {menuLoaded, menuRequested, isError, itemAddToCart} from '../../actions/index';
import Spinner from '../spinner/spinner';
import Error from '../error/error';
import './menu-item-page.scss';

class MenuItem extends Component{
    componentDidMount() {
        this.props.menuRequested();

        let {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.isError());
    }

    render() {
        let {menuItems, loading, error, itemAddToCart} = this.props;

        if(error) {
            return <Error/>
        }

        if(loading) {
            return <Spinner/>
        }

        let id = +this.props.match.params.id;

        let item = menuItems.find(item => id === +item.id);
        let {title, price, url, category} = item;
        
        return (
            <div className="menu_item">
                    <div className="menu_title">{title}</div>
                    <img className="menu_img" src={url} alt={title}></img>
                    <div className="menu_category">Category: <span>{category}</span></div>
                    <div className="menu_price">Price: <span>{price}$</span></div>
                    <button onClick={() => itemAddToCart(id)} className="menu_btn">Add to cart</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
        menuLoaded,
        menuRequested,
        isError,
        itemAddToCart
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuItem));