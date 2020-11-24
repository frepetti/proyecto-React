import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../resources/logo.png';

const Header = () => {
    return(
        <header className="App-header">
            <img src={logo} alt="logo" className="logo" />
            <div className="searchBarCont">
                <input type="text" id="searchBar" className="searchBar" />
                <button id="search" className="btn">
                    <SearchIcon style={{ fontSize: 24, fontWeight:300 }}></SearchIcon>
                </button>
            </div>
        </header>
    )
}

export default Header;