import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease'
import Animate from 'react-move/Animate'
import Markus from '../../../Resources/images/players/Markus.jpg'
import Jason from '../../../Resources/images/players/Jason.jpg'
import Lassi from '../../../Resources/images/players/Lassi.jpg'
import Marko from '../../../Resources/images/players/Marko.jpg'
import PlayerCard from '../../ui/playerCard'

class HomeCards extends Component {

    state = {
        cards:[
            {bottom: 60, left: 270, bck:Markus, no:31, firstName: "Markus", lastname: "Ahveninen"},
            {bottom: 30, left: 130, bck: Marko, no:5, firstName: "Marko", lastname: "Kärppä"},
            {bottom: 0, left: -10, bck: Jason, no:4, firstName: "Jason", lastname: "Levine"},
            {bottom: -30, left: -150, bck: Lassi, no:21, firstName: "Lassi", lastname: "Lankinen"}
        ]
    }

    showAnimateCards = () => (
        
        
        this.state.cards.map((card, i)=>(
            
            <Animate 
            key={i} 
            show={this.props.show} 
            
            start={{
                left:0, 
                bottom:0
            }} 
            
            enter={{
                left: [card.left],
                bottom: [card.bottom], 
                timing: {duration: 2000, ease: easePolyOut}
            }}
            >
                {({ left, bottom })=>{
                    return(
                        <div className="parent_player" style={{position: 'absolute', left, bottom}}>
                            <PlayerCard number={card.no} name={card.firstName} lastname={card.lastname} bck={card.bck}/>
                        </div>
                    )
                }}
                </Animate>
                ))
                )
                
                
                render() {
                    return (
                        <div>
                {this.showAnimateCards()}
            </div>
        );
    }
}

export default HomeCards;