import React from 'react';
// the reason why we use curly brackets is because we export Tag without default export
import { Tag } from '../../ui/misc'

const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag 
                    bck="#0e1731" 
                    size="50px" 
                    color="#ffffff"
                >
                    Matches

                </Tag>

                BLOCK

                TAG
            </div>
        </div>
    );
};

export default MatchesHome;