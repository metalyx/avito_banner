import { BANNER_CHANGE_SRC, BANNER_CHANGE_TEXT, BANNER_CHANGE_COLOR, BANNER_CHANGE_LINK } from './action';
import bmw from '/Users/Metalyx/Documents/Avito/banner/src/shared/bmw.png';
const defaultState = {
    src: bmw,
    text: 'Продают собственники, а также всякие лопухи а также lorem ipsum ave maria beach plate soul lol blbabla bla blaa lbalba',
    color: 'blue',
    link: 'https://avito.ru'
};

export const bannerReducer = (state = defaultState, action) => {
    console.log("Current State is: ");
    console.log(state)
    switch(action.type) {
        case BANNER_CHANGE_SRC:
        return {
                ...state, 
                src: action.payload
        };

        case BANNER_CHANGE_TEXT:
        return {
                ...state, 
                text: action.payload
        };

        case BANNER_CHANGE_COLOR:
        return {
                ...state, 
                color: action.payload
        };

        case BANNER_CHANGE_LINK:
            return {
                ...state,
                link: action.payload
            }
    }

    return state;
}