import React from 'react';





const ProdData = (props) => {
    return(
        <div className="prodData">
            <div className="priceCont">
                <div className="slashed">
                    {
                        props.slashedPrice &&
                        <span id="slashedPriceSymb">$</span> &&
                        <span id="slashedPrice">{props.slashedPrice}</span>
                    }

                </div>
                <div className="priceLine">
                    <span className="price">$</span>
                    <span className="price" id="price">{props.price}</span>
                    {
                        props.discount && <span id="discount">{props.discount} OFF</span>
                    }
                </div>
                {
                    props.installments && <span className="installments">Hasta {props.installments} cuotas sin interés</span>
                }
            </div>
            <div className="deliveryCont">
                <span id="eta">{props.eta}</span>
                {
                    props.delivery && <span id="delivery">{props.delivery}</span>
                }
                
            </div>
            <h6 id="title">{props.name}</h6>
        </div>
    )
}

export default ProdData;


