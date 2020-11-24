
import img1 from './resources/Desktop.jpg';
import img2 from './resources/Desktop2.jpg';
import img3 from './resources/notebook1.png';
import img4 from './resources/notebook2.jpg';
import img5 from './resources/notebook3.jpg';
import img6 from './resources/desktop3.jpg';
import Header from './components/Header/index';
import Sidebar from './components/Sidebar/index';
import Product from './components/Product/index';
import './App.scss';

const mock = {
    categories: [
        { name: 'PC'},
        { name: 'Notebook'},
        { name: 'Desktop'},
        { name: 'Informatica'}
    ],
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

function App() {
    return (
        <div className="App">
            <Header />
            <div className="body">
                <Sidebar />
                <section className="prodGrid">
                    {
                        mock.products.map( product => {
                            return(
                                <Product name = {product.name} slashedPrice = {product.slashedPrice} price = {product.price} discount = {product.discount} installments = {product.installments} eta = {product.eta} delivery = {product.delivery} img = {product.img} />
                            )
                        })
                    }

                </section>
            </div>
        </div>
    );
}

export default App;
