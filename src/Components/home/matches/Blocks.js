import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase'
import { firebaseLooper } from '../../ui/misc'

import MatchesBlock from '../../ui/matches_block'
import Slide from 'react-reveal/Slide'
class Blocks extends Component {

    state = {
        matches:[]
    }

    componentDidMount(){
        // we have 12 matches in total in database but we wanna use only 6 of them.
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
            const matches = firebaseLooper(snapshot)
            
            this.setState({
                matches: matches.reverse()
            })
        })
    }

    showMatches = (matches) => (
        matches ? 
            matches.map((match)=>(
                <Slide bottom key={match.id}>
                    <div className="item"> 
                        <div className="wrapper"> 
                            <MatchesBlock match={match}/>
                        </div>
                    </div>
                </Slide>
            ))

        :null
    )

    render() {
        console.log(this.state)
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        )
    }
}

export default Blocks;