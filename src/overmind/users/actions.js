export const setUser = ({ state, actions, effects }, loggedInUser) => {
    state.authedUser = loggedInUser;
};
