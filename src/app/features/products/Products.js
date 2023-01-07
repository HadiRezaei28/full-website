import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../../components/Navbar';
import { fetchProducts } from './productsSlice';
import SingleProduct from './SingleProduct';

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
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
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