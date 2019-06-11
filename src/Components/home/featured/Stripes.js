import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease'
import Animate from 'react-move/Animate'

class Stripes extends Component {

    state = {
        stripes:[
            {
                background: '#98c5e9'
            },
            {
                background: '#ffffff'
            },
            {
                background: '#98c5e9'
            }
        ]
    }


    showStripes = () => (
        this.state.stripes.map((stripe, i)=>())
    )

    render() {
        return (
            <div className="featured_stripes">
                {this.showStripes()}
            </div>
        );
    }
}

export default Stripes;