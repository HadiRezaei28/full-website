import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { shorten, isInCart, quantityCount } from '../../../functions/functions';
import { AddItem, RemoveItem, Increase, Decrease } from '../cart/cartSlice';
import { FaTrashAlt } from "react-icons/fa";
import styles from "./SingleProduct.module.css"


const SingleProduct = ({ product }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.cart);

    return (
        <div className={styles.container}>
            <img src={product.image} alt='product' className={styles.image} />
            <h3>{shorten(product.title)}</h3>
            <p>{product.price} $</p>
            <div className={styles.link}>
                <Link to={`/products/${product.id}`}>Detail</Link>
                <div className={styles.btnContainer}>
                    {quantityCount(state, product.id) === 1 && <button className={styles.smallbtn} onClick={() => dispatch(RemoveItem(product))}><FaTrashAlt /></button>}
                    {quantityCount(state, product.id) > 1 && <button className={styles.smallbtn} onClick={() => dispatch(Decrease(product))}>-</button>}
                    {quantityCount(state, product.id) > 0 && <span className={styles.count}>{quantityCount(state, product.id)}</span> }
                    {
                        isInCart(state, product.id) ?
                            <button className={styles.smallbtn} onClick={() => dispatch(Increase(product))}>+</button> :
                            <button onClick={() => dispatch(AddItem(product))}>Add to Cart</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default SingleProduct;