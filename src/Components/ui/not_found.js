import React from 'react';
import not_found from '../../Resources/images/page_not_found.png'

const Not_found = () => {
    return (
        <div className="not_found_container">
            <div>404 - Page not found :(</div>
            <div>Where is the page Aguero?</div>
            <img style={{width: '30%', opacity: '0.75'}} src={not_found}/>
        </div>
    )
}

export default Not_found;