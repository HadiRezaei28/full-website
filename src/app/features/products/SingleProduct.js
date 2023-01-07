import React from 'react';
import { Link } from 'react-router-dom';
import { shorten } from '../../../functions/functions';

const SingleProduct = ({product}) => {
    return (
        <div>
            <img src={product.image} alt='product' style={{width: "200px"}}/>
            <h3>{shorten(product.title)}</h3>
            <p>{product.price} $</p>
            <div>
                <Link to={`/products/${product.id}`}>Detail</Link>
                <div>
                    <button>Add to card</button>
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;