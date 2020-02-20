import React, { useState } from 'react';
import { connect } from 'react-redux';
import { formatString, capitalize } from '../actions/utilities'

import { toggleEditNickname, addNickname, removePokemon, changeAbility, toggleEditAbility, changeMoves, toggleEditMoves } from '../actions';

const TeamCard = props => {
    const [nickname, setNickname] = useState('');
    const [ability, setAbility] = useState('');
    const [firstMove, setFirstMove] = useState('');
    const [secondMove, setSecondMove] = useState('');
    const [thirdMove, setThirdMove] = useState('');
    const [fourthMove, setFourthMove] = useState('');

    const handleNicknameChange = e => {
        setNickname(e.target.value)
    }

    const handleAbilityChange = e => {
        setAbility(e.target.value)
    }

    const handleFirstMoveChange = e => {
        setFirstMove(e.target.value);
    }
    const handleSecondMoveChange = e => {
        setSecondMove(e.target.value);
    }
    const handleThirdMoveChange = e => {
        setThirdMove(e.target.value);
    }
    const handleFourthMoveChange = e => {
        setFourthMove(e.target.value);
    }

    const validateMoves = () => {
        if(!firstMove && !secondMove && !thirdMove && !fourthMove)
            return false;
        const arr = [firstMove, secondMove, thirdMove, fourthMove].filter( item => {return item !== ''} )
        if( (new Set(arr)).size !== arr.length )
            return false;
        return true;
    }

    const handleSumbitMoves = () => {
        if(!validateMoves())
            return;
        else{
            const movesArray = [firstMove, secondMove, thirdMove, fourthMove].filter( item => { return item !== ''} )
            props.changeMoves(movesArray, props.posn)
        }
    }

    const handleToggleEditMoves = () => {
        setFirstMove('');
        setSecondMove('');
        setThirdMove('');
        setFourthMove('');
        props.toggleEditMoves(props.posn)
    }

    console.log(props)
    return (
        
        <div className='team-card'>
            <div className='remove' onClick={() => props.removePokemon(props.posn)}>X</div>
            <img src={props.pokemon.sprites.front_default} alt={props.pokemon.species.name}/>
            <table>
                <tr>
                    <td className='toggle' onClick={() => props.toggleEditNickname(props.posn)} >Nickname:</td>
                    <td>{props.isEditingNickname === props.posn ? 
                            <form> <input className='nickname' type='text' onChange={handleNicknameChange}/><input className='nickname-btn' value={'\u2713'} onClick={() => props.addNickname(nickname, props.posn)} type='button'/> </form> :
                            props.pokemon.nickname ? props.pokemon.nickname : capitalize(props.pokemon.species.name)
                        }</td>
                </tr>
                <tr>
                    <td className='toggle' onClick={() => props.toggleEditAbility(props.posn)} >Ability:</td>
                    <td>{props.isEditingAbility === props.posn ?
                            <form> 
                                <select className='ability' onChange={handleAbilityChange}>
                                    <option value='[none]'>[none]</option>
                                    {props.pokemon.abilities.map( (item, key) => <option value={item.ability.name} key={key}>{item.ability.name}</option>)}
                                </select>
                                <input className='nickname-btn' value={'\u2713'} onClick={() => props.changeAbility(ability, props.posn)} type='button'/>
                            </form> :
                            props.pokemon.chosenAbility ? formatString(props.pokemon.chosenAbility) : formatString(props.pokemon.abilities[0].ability.name)
                        }</td>
                </tr>
                <tr>
                    <td className='toggle' onClick={handleToggleEditMoves} >Moves:</td>
                    <td>{props.isEditingMoves === props.posn ? 
                            <>
                            <select className='firstMove' onChange={handleFirstMoveChange}>
                                <option value=''>[none]</option>
                                {props.pokemon.moves.map( (item, key) => <option value={item.move.name} key={key}>{item.move.name}</option>)}
                            </select>
                            <select className='secondMove' onChange={handleSecondMoveChange}>
                                <option value=''>[none]</option>
                                {props.pokemon.moves.map( (item, key) => <option value={item.move.name} key={key}>{item.move.name}</option>)}
                            </select>
                            <select className='thirdMove' onChange={handleThirdMoveChange}>
                                <option value=''>[none]</option>
                                {props.pokemon.moves.map( (item, key) => <option value={item.move.name} key={key}>{item.move.name}</option>)}
                            </select>
                            <select className='fourthMove' onChange={handleFourthMoveChange}>
                                <option value=''>[none]</option>
                                {props.pokemon.moves.map( (item, key) => <option value={item.move.name} key={key}>{item.move.name}</option>)}
                            </select>
                            <input type='button' className='moves-btn' onClick={handleSumbitMoves} value={'\u2713'} /></> :
                            
                            props.pokemon.chosenMoves ? 
                                <>
                                <p>{props.pokemon.chosenMoves[0] ? formatString(props.pokemon.chosenMoves[0]) : '[none]'}</p>
                                <p>{props.pokemon.chosenMoves[1] ? formatString(props.pokemon.chosenMoves[1]) : '[none]'}</p>
                                <p>{props.pokemon.chosenMoves[2] ? formatString(props.pokemon.chosenMoves[2]) : '[none]'}</p>
                                <p>{props.pokemon.chosenMoves[3] ? formatString(props.pokemon.chosenMoves[3]) : '[none]'}</p>
                                </>:
                                <>
                                <p>{props.pokemon.moves[0] ? formatString(props.pokemon.moves[0].move.name) : '[none]'}</p>
                                <p>{props.pokemon.moves[1] ? formatString(props.pokemon.moves[1].move.name) : '[none]'}</p>
                                <p>{props.pokemon.moves[2] ? formatString(props.pokemon.moves[2].move.name) : '[none]'}</p>
                                <p>{props.pokemon.moves[3] ? formatString(props.pokemon.moves[3].move.name) : '[none]'}</p>
                                </>
                        }
                    </td>
                </tr>
            </table>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        isEditingNickname: state.isEditingNickname,
        isEditingAbility: state.isEditingAbility,
        isEditingMoves: state.isEditingMoves
    }
}

export default connect(
    mapStateToProps,
    { toggleEditNickname, addNickname, removePokemon, changeAbility, toggleEditAbility, changeMoves, toggleEditMoves }
) (TeamCard);