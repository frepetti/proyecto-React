import React from 'react';
import img1 from '../../resources/Desktop.jpg';
import ProdData from './components/ProdData';

const Product = (props) => {
    return(
        <div className="product">
            <div className="prodImgCont">
                <img src={props.img} alt="" id="prodImg" />
            </div>
            <ProdData name = {props.name} slashedPrice = {props.slashedPrice} price = {props.price} discount = {props.discount} installments = {props.installments} eta = {props.eta} delivery = {props.delivery} />
        </div>
    )
}

export default Product;