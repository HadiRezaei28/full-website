import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { shorten, isInCart, quantityCount } from '../../../functions/functions';
import { AddItem, RemoveItem, Increase, Decrease } from '../cart/cartSlice';
import { FaTrashAlt } from "react-icons/fa";


const SingleProduct = ({ product }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.cart);

    return (
        <div>
            <img src={product.image} alt='product' style={{ width: "200px" }} />
            <h3>{shorten(product.title)}</h3>
            <p>{product.price} $</p>
            <div>
                <Link to={`/products/${product.id}`}>Detail</Link>
                <div>
                    {quantityCount(state, product.id) === 1 && <button onClick={() => dispatch(RemoveItem(product))}><FaTrashAlt /></button>}
                    {quantityCount(state, product.id) > 1 && <button onClick={() => dispatch(Decrease(product))}>-</button>}
                    {quantityCount(state, product.id) > 0 && quantityCount(state, product.id)}
                    {
                        isInCart(state, product.id) ?
                            <button onClick={() => dispatch(Increase(product))}>+</button> :
                            <button onClick={() => dispatch(AddItem(product))}>Add to Cart</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default SingleProduct;