import * as actionTypes from './actions';

//----------------------------------------------------------------------------------
// state
//  This is now the global initial state.
const initialState = {
    UserData: {
        LoginToken: ''
    },
    TabState: {
        SelectedTab: 0
    }
}

//----------------------------------------------------------------------------------
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                UserData: action.UserData
            };
        default:
            return state;
    }
};

export default reducer;