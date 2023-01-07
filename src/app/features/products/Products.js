import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../../components/Navbar';
import { fetchProducts } from './productsSlice';

const Products = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
        <Navbar />
        <div>
            {
                products.loading ? <h2>Loading...</h2>:
                products.error ? <h2>{products.error}</h2> :
                products.data.map(product => {
                    return <p key={product.id}>{product.id}</p>
                })
            }
        </div>
        </>
    );
};

export default Products;