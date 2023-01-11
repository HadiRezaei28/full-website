import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../../components/Navbar/Navbar';
import { fetchProducts } from './productsSlice';
import SingleProduct from './SingleProduct';
import styles from "./Products.module.css"

const Products = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        if (!products.data.length) {
            dispatch(fetchProducts())
        }
    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                {
                    products.loading ? <h2>Loading...</h2> :
                        products.error ? <h2>{products.error}</h2> :
                            products.data.map(product => {
                                return <SingleProduct key={product.id} product={product} />


                            })
                }
            </div>
        </>
    );
};

export default Products;