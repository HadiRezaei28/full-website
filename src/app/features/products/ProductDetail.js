import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import styles from "./ProductDetail.module.css"

const ProductDetail = () => {

    const products = useSelector(state => state.products.data);
    const params = useParams();
    const id = params.id;
    const product = products[id - 1];
    const { image, title, price, category, description } = product;

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <img className={styles.image} src={image} alt='product' />
                <div className={styles.textContainer}>
                    <h3>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.category}><span>Category:</span> {category}</p>
                    <div className={styles.buttonContainer}>
                        <span className={styles.price}>{price} $</span>
                        <Link to="/products">Back to shop</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;