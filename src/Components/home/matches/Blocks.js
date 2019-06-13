import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase'
import { firebaseLooper, reverseArray } from '../../ui/misc'

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

    showMatches = () => (
        <div>
            match
        </div>
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