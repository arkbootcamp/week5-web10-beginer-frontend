// order reducer
const initialState = {
  order: [],
  cart: [],
}
const orderReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_ORDER':
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}
export default orderReducer