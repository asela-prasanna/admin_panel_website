

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                currentUser: action.payload,

            }
        }
        case "LOGOUT": {
            return {
                currentUser: null,
            }
        }
        // to avoid the error
        case "INITIAL_STATE": {
            return {
                currentUser: "NO USER",
            }
        }
        case "TOGGLE": {
            return {
                darkMode: !state.darkMode,
            }
        }
        default:
            return state;
    }
}

export default AuthReducer;