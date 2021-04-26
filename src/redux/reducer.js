
import { BANNER } from '../shared/banner';



import { combineReducers } from "redux";
import { bannerReducer } from "./banner/reducer";

export default combineReducers({
    banner: bannerReducer
});

// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'BANNER_CHANGED':
//             return{
//                 ...state,
//                 src: action.payload.src,
//                 text: action.payload.text,
//                 color: action.payload.color,
//                 link: action.payload.link
                

//             };

        
//     }
//     return state;
// };


