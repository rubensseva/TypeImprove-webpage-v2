const initialState = {
  text: 'No text selected',
};

export function myReducer(state, action) {
  return { ...state, text: action.payload };
}
