import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'

import { firebaseMatches } from '../../firebase'
import { firebaseLooper, reverseArray } from '../ui/misc'

import LeagueTable from './table'


class TheMatches extends Component {

    state = {
        loading: true,
        matches: [],
        filterMatches: [],
        playerFilter: 'All',
        resultFilter: 'All'
    }

    componentDidMount(){
        firebaseMatches.once('value').then(snapshot=>{
            const matches = firebaseLooper(snapshot)

            this.setState({
                loading: false,
                matches: matches.reverse(),
                filterMatches: matches.reverse()
            })
        })
    }

    render() {
        // console.log(this.state);
       const state = this.state

        return (
            <div className="the_matches_container">
                <div className="the_matches_wrapper">
                    <div className="left">

                    </div>
                    <div className="right">

                    </div>
                </div>       
            </div>
        );
    }
}

export default TheMatches;