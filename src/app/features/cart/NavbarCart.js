import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavbarCart = () => {

    const itemsCounter = useSelector(state => state.cart.itemsCounter);

    return (
        <div>
            <div>
                <Link to="/cart">
                    <FaShoppingCart />
                </Link>
                <span>{itemsCounter}</span>
            </div>
        </div>
    );
};

export default NavbarCart;