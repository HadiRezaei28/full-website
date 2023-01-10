import React from 'react';
import { useDispatch } from 'react-redux';
import { shorten } from '../../../functions/functions';
import { FaTrashAlt } from "react-icons/fa";
import { Decrease, Increase, RemoveItem } from './cartSlice';

const Cart = ({ data }) => {

    const { title, price, quantity, image } = data;
    const dispatch = useDispatch();

    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {quantity > 1 ? <button onClick={() => dispatch(Decrease(data))}>-</button> : 
                <button onClick={() => dispatch(RemoveItem(data))}><FaTrashAlt /></button>}
                {<button onClick={() => dispatch(Increase(data))}>+</button>}
            </div>
        </div>
    );
};

export default Cart;