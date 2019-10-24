import React from 'react';

const playerCard = (props) => {
    return (
        <div className="player_card_wrapper">
            <div className="player_card_thmb">
            <img src={props.bck}/>
            </div>
            <div className="player_card_nfo">
                <div className="player_card_number">
                    {props.number}
                </div>
                <div className="player_card_name">
                    <span>{props.name}</span>
                    <span>{props.lastname}</span>
                </div>
            </div>
        </div>
    );
};

export default playerCard;