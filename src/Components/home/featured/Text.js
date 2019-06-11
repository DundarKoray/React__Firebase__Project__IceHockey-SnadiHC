import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease'
import Animate from 'react-move/Animate'


class Text extends Component {

    animateNumber = () => (
        <Animate 
            show={true} 
            start={{
                opacity: 0,
                rotate: 0
            }}

            enter={{
                opacity: [1],
                rotate: [360],
                timing: {duration: 1000, ease: easePolyOut}
            }}
        >
            {({opacity, rotate}) =>{
                return(
                    <div 
                        className="featured_number" 
                        style={{
                            opacity,
                            transform: `translate(260px, 170px) rotateY(${rotate}deg)`,
                            
                        }}
                    >
                        3
                    </div>
                )
            }}
        </Animate>
    )

    animateFirst = () => (
        <Animate 
            show={true} 
            start={{
                opacity: 0,
                x: 503,
                y: 450
            }}

            enter={{
                opacity: [1],
                x: 503,
                y: 450,
                timing: {duration: 1000, ease: easePolyOut}
            }}
        >
            {({opacity}) =>{
                return(
                    <div 
                        className="featured_first" 
                        style={{
                            opacity,
                            transform: `translate(260px, 170px)`,
                        }}
                    >
                        3
                    </div>
                )
            }}
        </Animate>
    )


    render() {
        return (
            <div className="featured_text">
                {this.animateNumber()}
                {this.animateFirst()}
                
            </div>
        );
    }
}

export default Text;
