export default function user(state =[], action){
    switch(action.type){
        case 'ADD_USER':
            return[...state, action.name]
        default:
            return state
    }
}