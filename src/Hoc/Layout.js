import React from 'react'

const Layout = (props) => {
    return(
        <div>
            header
            {props.children}
            footer
        </div>
    )
}

export default Layout