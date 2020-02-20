import { 
    FETCH_DATA, 
    UPDATE_TEAM, 
    REMOVE_POKEMON,
    CLEAR_TEAM, 
    ADD_NICKNAME, 
    TOGGLE_EDIT_NICKNAME,
    CHANGE_ABILITY,
    TOGGLE_EDIT_ABILITY,
    CHANGE_MOVES,
    TOGGLE_EDIT_MOVES,
    SET_ERROR 
} from '../actions';

const initialState = {
    team: [],
    teamSize: 0,
    isFetchingData: false,
    error: '',
    isEditingNickname: -1,
    isEditingAbility: -1,
    isEditingMoves: -1
};

export const pokemonReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
            };
        case UPDATE_TEAM:
            return {
                ...state,
                team: [...state.team, action.payload],
                teamSize: state.teamSize+1,
                isFetchingData: false
            };
        case REMOVE_POKEMON:
            return {
                ...state,
                team: state.team.filter((item, key) => {return key !== action.payload}),
                teamSize: state.teamSize - 1
            }
        case CLEAR_TEAM:
            return {
                ...state,
                team: [],
                teamSize: 0
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        case ADD_NICKNAME:
            return {
                ...state,
                
                team: state.team.map( (item, key) => key === action.payload.key ? {...state.team[key], nickname: action.payload.nickname} : {...state.team[key]} ),
                isEditingNickname: -1
            }
        case TOGGLE_EDIT_NICKNAME:
            return {
                ...state,
                isEditingNickname: action.payload
            }
        case CHANGE_ABILITY:
            return{
                ...state,
                team: state.team.map( (item, key) => key === action.payload.key ? {...state.team[key], chosenAbility: action.payload.ability} : {...state.team[key]}),
                isEditingAbility: -1
            }
        case TOGGLE_EDIT_ABILITY:
            return{
                ...state,
                isEditingAbility: action.payload
            }
        case CHANGE_MOVES:
            return {
                ...state,
                team: state.team.map( (item, key) => key === action.payload.key ? {...state.team[key], chosenMoves: action.payload.moves} : {...state.team[key]} ),
                isEditingMoves: -1
            }
        case TOGGLE_EDIT_MOVES:
            return {
                ...state,
                isEditingMoves: action.payload
            }
        default:
            return state;
    }
};