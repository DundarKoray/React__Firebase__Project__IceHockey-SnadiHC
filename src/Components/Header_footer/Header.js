import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'
import { CityLogo } from '../ui/icons'

class Header extends Component {
    render(){
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#f5ee31',
                    padding: '10px 0',
                    boxShadow: 'none',
                    borderBottom: '2px solid #000000'
                }}
            >
                <Toolbar style={{display:'flex'}}>
                    <div style={{flexGrow: 1}}>
                        <div className="header_logo">
                            <CityLogo link={true} linkTo="/" width="70px" height="70px"/>
                        </div>
                    </div>

                    <Link to="/the_team">
                        <Button color="#000000">The team</Button>
                    </Link>
                    <Link to="/the_matches">
                        <Button color="#000000">Matches</Button>
                    </Link>

                </Toolbar>
            </AppBar>
            
        )
    }
}

export default Header