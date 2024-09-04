import {createStore} from "redux";
function WatchlistReducer(state={watchlist:[]}, action){
    switch(action.type){
        case 'ADD_TO_WATCHLIST':{

        }
        case 'REMOVE_FROM_WATCHLIST':{

        }
        default:
            return state

    }   
}

const store = createStore(WatchlistReducer);
export default store;

/*

reducer is used manupulates the global state  with the help of actions


*/