import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuListItem from '../menu-list-item/menu-list-item';
import WithRestoService from '../hoc/with-resto-service';
import { menuLoaded, menuRequested, isError, itemAddToCart } from '../../actions/index';
import Spinner from '../spinner/spinner';
import Error from '../error/error';
import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        let { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.isError());
    }

    render() {
        let { menuItems, loading, error, itemAddToCart } = this.props;

        if (error) return <Error />;

        if (loading) return <Spinner />;

        let items = menuItems.map(menuItem => {
            return <MenuListItem addToCart={itemAddToCart} key={menuItem.id} menuItem={menuItem} />
        });

        return (
            <View items={items} />
        )
    }
};

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

const View = ({ items }) => {
    return (
        <ul className="menu__list">
            {items}
        </ul>
    )
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));