import React from 'react';
import Categories from './components/Categories'

const Sidebar = (props) => {
    return(
        <aside className="sideBar">
            <h3 id="displayedCat">Notebook</h3>
            <span id="resultQty">7.000 Resultados</span>
            <h4>Categorias</h4>
                <Categories name = {props.name} />
        </aside>
    );
}

export default Sidebar;