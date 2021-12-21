export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null, 

    //remove after debugging
    token: "BQBA3cEpatu9VCy74gy0sxWmct-I9f1rYHooBeRGVqB-Sa6fQuOlJQWzEs5KW64DeUbr4PFuNBnwINWM__xcyh7N4d_PVyoJArHTZDxjnfM-RbPtZ5zQCkuZtT0Ct3_6hGWKGWV3dw4G-kYZDBzzJM27y-0Raf8Oous",
}

//reducers job is to listen to the actions
//action is dispacthing the data into the data layer... for example we get the user from the API and we create an action SET_USER which helps to dispatch the info of the user into the datalayer

const reducer = (state, action) => {
    console.log(action);

    // Action has a type , [payload]... in our case the type of the user is set_user and the payload is the user..

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token,
                }
      default :
      return state;
    };
};


export default reducer;