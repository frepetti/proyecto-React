import logo from './resources/logo.png';
import img1 from './resources/Desktop.jpg';
import img2 from './resources/Desktop2.jpg';
import img3 from './resources/notebook1.png';
import img4 from './resources/notebook2.jpg';
import img5 from './resources/notebook3.jpg';
import img6 from './resources/desktop3.jpg';
import SearchIcon from '@material-ui/icons/Search';
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo" className="logo" />
                <div className="searchBarCont">
                    <input type="text" id="searchBar" className="searchBar" />
                    <button id="search" className="btn">
                        <SearchIcon style={{ fontSize: 24, fontWeight:300 }}></SearchIcon>
                    </button>
                </div>
            </header>
            <div className="body">
                <aside className="sideBar">
                    <h3 id="displayedCat">Notebook</h3>
                    <span id="resultQty">7.000</span>
                    <span>Resultados</span>
                    <h4>Categorias</h4>
                    <ul className="categories">
                        <li>Cat 1</li>
                        <li>Cat 2</li>
                        <li>Cat 3</li>
                        <li>Cat 4</li>
                        <li>Cat 5</li>
                    </ul>
                </aside>
                <section className="prodGrid">
                    <div className="product">
                        <div className="prodImgCont">
                            <img src={img1} alt="" id="prodImg" />
                        </div>
                        <div className="prodData">
                            <div className="priceCont">
                                <div className="slashed">
                                    <span id="slashedPriceSymb">$</span>
                                    <span id="slashedPrice">20.000</span>
                                </div>
                                <div className="priceLine">
                                    <span className="price">$</span>
                                    <span className="price" id="price">18.000</span>
                                    <span id="discount">20% OFF</span>
                                </div>
                                <span className="installments">Hasta 3 cuotas sin interés</span>
                            </div>
                            <div className="deliveryCont">
                                <span id="eta">Llega Gratis Mañana</span>
                                <span id="delivery">FULL</span>
                            </div>
                            <h6 id="title">Desktop...</h6>
                        </div>
                    </div>
                    <div className="product">
                        <div className="prodImgCont">
                            <img src={img2} alt="" id="prodImg" />
                        </div>
                        <div className="prodData">
                            <div className="priceCont">
                                <div className="slashed">
                                    <span id="slashedPriceSymb"></span>
                                    <span id="slashedPrice"></span>
                                </div>
                                <div className="priceLine">
                                    <span className="price">$</span>
                                    <span className="price" id="price">18.000</span>
                                    <span id="discount"></span>
                                </div>
                                <span className="installments"></span>
                            </div>
                            <div className="deliveryCont">
                                <div className="etaCont"></div>
                                <span id="eta">Llega Gratis Mañana</span>
                                <span id="delivery">FULL</span>
                            </div>
                            <h6 id="title">Desktop...</h6>
                        </div>
                    </div>
                    <div className="product">
                        <div className="prodImgCont">
                            <img src={img3} alt="" id="prodImg" />
                        </div>
                        <div className="prodData">
                            <div className="priceCont">
                                <div className="slashed">
                                    <span id="slashedPriceSymb">$</span>
                                    <span id="slashedPrice">20.000</span>
                                </div>
                                <div className="priceLine">
                                    <span className="price">$</span>
                                    <span className="price" id="price">18.000</span>
                                    <span id="discount">20% OFF</span>
                                </div>
                                <span className="installments">Hasta 3 cuotas sin interés</span>
                            </div>
                            <div className="deliveryCont">
                                <span id="eta">Llega Gratis Mañana</span>
                                <span id="delivery">FULL</span>
                            </div>
                            <h6 id="title">Desktop...</h6>
                        </div>
                    </div>
                    <div className="product">
                        <div className="prodImgCont">
                            <img src={img4} alt="" id="prodImg" />
                        </div>
                        <div className="prodData">
                            <div className="priceCont">
                                <div className="slashed">
                                    <span id="slashedPriceSymb">$</span>
                                    <span id="slashedPrice">20.000</span>
                                </div>
                                <div className="priceLine">
                                    <span className="price">$</span>
                                    <span className="price" id="price">18.000</span>
                                    <span id="discount">20% OFF</span>
                                </div>
                                <span className="installments">Hasta 3 cuotas sin interés</span>
                            </div>
                            <div className="deliveryCont">
                                <span id="eta">Llega Gratis Mañana</span>
                                <span id="delivery">FULL</span>
                            </div>
                            <h6 id="title">Desktop...</h6>
                        </div>
                    </div>
                    <div className="product">
                        <div className="prodImgCont">
                            <img src={img5} alt="" id="prodImg" />
                        </div>
                        <div className="prodData">
                            <div className="priceCont">
                                <div className="slashed">
                                    <span id="slashedPriceSymb">$</span>
                                    <span id="slashedPrice">20.000</span>
                                </div>
                                <div className="priceLine">
                                    <span className="price">$</span>
                                    <span className="price" id="price">18.000</span>
                                    <span id="discount">20% OFF</span>
                                </div>
                                <span className="installments">Hasta 3 cuotas sin interés</span>
                            </div>
                            <div className="deliveryCont">
                                <span id="eta">Llega Gratis Mañana</span>
                                <span id="delivery">FULL</span>
                            </div>
                            <h6 id="title">Desktop...</h6>
                        </div>
                    </div>
                    <div className="product">
                        <div className="prodImgCont">
                            <img src={img6} alt="" id="prodImg" />
                        </div>
                        <div className="prodData">
                            <div className="priceCont">
                                <div className="slashed">
                                    <span id="slashedPriceSymb">$</span>
                                    <span id="slashedPrice">20.000</span>
                                </div>
                                <div className="priceLine">
                                    <span className="price">$</span>
                                    <span className="price" id="price">18.000</span>
                                    <span id="discount">20% OFF</span>
                                </div>
                                <span className="installments">Hasta 3 cuotas sin interés</span>
                            </div>
                            <div className="deliveryCont">
                                <span id="eta">Llega Gratis Mañana</span>
                                <span id="delivery">FULL</span>
                            </div>
                            <h6 id="title">Desktop...</h6>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
