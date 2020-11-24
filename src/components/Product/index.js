import React from 'react';
import img1 from '../../resources/Desktop.jpg';
import ProdData from './components/ProdData';

const Product = () => {
    return(
        <div className="product">
            <div className="prodImgCont">
                <img src={product.img} alt="" id="prodImg" />
            </div>
            {
                mock.products.map( product => {
                    return(
                        <ProdData name = {product.name} slashedPrice = {product.slashedPrice} price = {product.price} discount = {product.discount} installments = {product.installments} eta = {product.eta} delivery = {product.delivery} />
                    )
                })
            }
        </div>
    )
}

export default Product;