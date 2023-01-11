import React from 'react';
import { useDispatch } from 'react-redux';
import { shorten } from '../../../functions/functions';
import { FaTrashAlt } from "react-icons/fa";
import { Decrease, Increase, RemoveItem } from './cartSlice';
import styles from "./Cart.module.css"

const Cart = ({ data }) => {

    const { title, price, quantity, image } = data;
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product" />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {quantity > 1 ? <button onClick={() => dispatch(Decrease(data))}>-</button> : 
                <button onClick={() => dispatch(RemoveItem(data))}><FaTrashAlt /></button>}
                {<button onClick={() => dispatch(Increase(data))}>+</button>}
            </div>
        </div>
    );
};

export default Cart;