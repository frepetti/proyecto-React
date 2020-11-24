import React from 'react';
import img1 from '../../resources/Desktop.jpg';
import ProdData from './components/ProdData';

const product = {
    products: [
        {
            name: 'Notebook',
            slashedPrice: 20000,
            price: 18000,
            discount: '20%',
            installments: 3,
            eta: 'Llega Gratis Mañana',
            delivery: 'FULL',
            img: img1
        }
    ]
}

const Product = () => {
    return(
        <div className="product">
            <div className="prodImgCont">
                <img src={img1} alt="" id="prodImg" />
            </div>
            <ProdData />
        </div>
    )
}

export default Product;