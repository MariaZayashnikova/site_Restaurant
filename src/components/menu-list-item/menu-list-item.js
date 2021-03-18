import React from 'react';
import './menu-list-item.scss';
import {Link} from 'react-router-dom'


const MenuListItem = ({menuItem, addToCart}) => {
    let {title, price, url, category, id} = menuItem;
    
    return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <Link to={`/menu/${id}`}>
                    <img className="menu__img" src={url} alt={title}></img>
                </Link>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button onClick={() => addToCart(id)} className="menu__btn">Add to cart</button>
                
            </li>
    )

}

export default MenuListItem;