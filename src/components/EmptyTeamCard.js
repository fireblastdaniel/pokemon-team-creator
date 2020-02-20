import React from 'react'

const EmptyTeamCard = () => {
    return (
        <div className='empty team-card'>
            <img src={require('../assets/pokeball.png')} alt='pokeball'/>
        </div>
    )
};

export default EmptyTeamCard;