import { combineReducers } from 'redux';
import initState from '../state';

function card(state: any = initState, action: any) {
    switch (action.type) {
    case 'CHANGE_NAME':
        return {
            name: action.name // 使用action携带的新name
        };

    default:
        return state; // 没有匹配的action type，返回原来的state
    }
}

function dialog(state: any = initState, action: any) {
    switch (action.type) {
    case 'SHOW_DIALOG':
        return {
            status: true
        };

    case 'CLOSE_DIALOG':
        return {
            status: false
        };

    default:
        return state; // 没有匹配的action type，返回原来的state
    }
}

export default combineReducers({
    card,
    dialog
});