import React from 'react';

const Sidebar = () => {
    return(
        <aside className="sideBar">
            <h3 id="displayedCat">Notebook</h3>
            <span id="resultQty">7.000 Resultados</span>
            <h4>Categorias</h4>
            <ul className="categories">
                <li>Cat 1</li>
                <li>Cat 2</li>
                <li>Cat 3</li>
                <li>Cat 4</li>
                <li>Cat 5</li>
            </ul>
        </aside>
    );
}

export default Sidebar;