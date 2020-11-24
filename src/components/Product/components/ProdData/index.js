import React from 'react';





const ProdData = () => {
    return(
        <div className="prodData">
            <div className="priceCont">
                <div className="slashed">
                    <span id="slashedPriceSymb">$</span>
                    <span id="slashedPrice">{product.slashedPrice}</span>
                </div>
                <div className="priceLine">
                    <span className="price">$</span>
                    <span className="price" id="price">{product.price}</span>
                    <span id="discount">{product.discount} OFF</span>
                </div>
                {
                    product.installments && <span className="installments">Hasta {product.installments} cuotas sin interés</span>
                }
            </div>
            <div className="deliveryCont">
                <span id="eta">{product.eta}</span>
                <span id="delivery">delivery</span>
            </div>
            <h6 id="title">{product.name}</h6>
        </div>
    )
}

export default ProdData;


