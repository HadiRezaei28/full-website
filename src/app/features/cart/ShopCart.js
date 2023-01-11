import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Cart from './Cart';
import { Checkout, Clear } from './cartSlice';
import styles from "./ShopCart.module.css";

const ShopCart = () => {

    const state = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.cartContainer}>
                    {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
                </div>
                {
                    state.itemsCounter > 0 && <div className={styles.payments}>
                        <p><span>Totol Items:</span> {state.itemsCounter}</p>
                        <p><span>Totol Payments:</span> {state.total} $</p>
                        <div className={styles.buttonContainer}>
                            <button className={styles.checkout}  onClick={() => dispatch(Checkout())} >Ckeck Out</button>
                            <button className={styles.clear} onClick={() => dispatch(Clear())} >Clear</button>
                        </div>
                    </div>
                }
                {
                    state.checkout && <div className={styles.complete}>
                        <h3>Checkout successfully</h3>
                        <Link to="/products">Buy more?</Link>
                    </div>
                }
                {
                    state.itemsCounter === 0 && !state.checkout && <div>
                        <h3>Want to Buy?</h3>
                        <Link to="/products">Go to Shop</Link>
                    </div>
                }
            </div>
        </>
    );
};

export default ShopCart;