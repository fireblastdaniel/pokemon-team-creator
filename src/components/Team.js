import React from 'react'
import { connect } from 'react-redux'
import { addNickname } from '../actions'

import TeamCard from './TeamCard';
import EmptyTeamCard from './EmptyTeamCard';

const Team = props => {
    let empty = []
    for(let i=0; i<6-props.teamSize; i++) {
        empty.push(<EmptyTeamCard key={ i+10 } />)
    }
    return(
        <>
        {!props.error ? (
            <div className='team-container'>
                {
                    props.team.map( (item, i) => (
                            <TeamCard pokemon={item} key={i} posn={i} />
                    ))
                }
                {   empty.map( item => item)    }
            </div>
        ) : (
            <div className='error'>{props.error}</div>
        )}
        </>
    );
}

const mapStateToProps = state => {
    return {
        team: state.team,
        teamSize: state.teamSize,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { addNickname }
) (Team);