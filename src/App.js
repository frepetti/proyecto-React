
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
            name: 'Desktop',
            price: 18000,
            installments: 3,
            eta: 'Llega Gratis Mañana',
            delivery: 'FULL',
            img: img1
        },
        {
            name: 'Desktop',
            slashedPrice: 50000,
            price: 40000,
            discount: '20%',
            installments: 18,
            eta: 'Llega Gratis Mañana',
            delivery: 'FULL',
            img: img2
        },
        {
            name: 'Notebook',
            slashedPrice: 20000,
            price: 18000,
            discount: '20%',
            installments: 3,
            eta: 'Llega Gratis Mañana',
            img: img3
        },
        {
            name: 'Notebook',
            slashedPrice: 20000,
            price: 18000,
            discount: '20%',
            eta: 'Llega Gratis Mañana',
            delivery: 'FULL',
            img: img4
        },
        {
            name: 'Notebook',
            slashedPrice: 20000,
            price: 18000,
            discount: '20%',
            installments: 3,
            eta: 'Llega Gratis Mañana',
            img: img5
        },
        {
            name: 'CPU',
            slashedPrice: 20000,
            price: 18000,
            discount: '20%',
            installments: 3,
            eta: 'Llega Gratis Mañana',
            delivery: 'FULL',
            img: img6
        }
    ]
}

function App() {
    return (
        <div className="App">
            <Header />
            <div className="body">
                <Sidebar name = {mock.categories}/>
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
