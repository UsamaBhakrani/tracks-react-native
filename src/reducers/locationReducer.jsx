const locationReducer = (state, action) => {
  if (action.type === "") {
    return {
      ...state,
    };
  }
  return state;
};

export default locationReducer
