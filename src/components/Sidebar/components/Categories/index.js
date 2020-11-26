import React from 'react';

const Categories = (props) => {
    return(
        <ul className="categories">
            {
                props.name.map( categories => {
                    return(
                        <li>{categories.name}</li>
                    )
                })
            }
        
        </ul>
    )

}

export default Categories;